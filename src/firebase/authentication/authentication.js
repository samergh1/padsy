import { auth, db } from "./../config";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} from "firebase/auth";
import {
    query,
    getDocs,
    collection,
    where,
    setDoc,
    doc,
} from "firebase/firestore";

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async ({ onSuccess }) => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                authProvider: "google",
                email: user.email,
            });
        }

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logInWithEmailAndPassword = async ({ email, password, onSuccess }) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const registerWithEmailAndPasswordDoctor = async ({ name, email, password, phoneNumber, address, specialty, isDoctor, onSuccess }) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            phoneNumber,
            address,
            specialty,
            isDoctor
        });

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};
const registerWithEmailAndPasswordPatient = async ({ name, email, password, phoneNumber, isDoctor, onSuccess }) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            phoneNumber,
            isDoctor
        });

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

const logout = () => {
    signOut(auth);
};

export { signInWithGoogle, logInWithEmailAndPassword, registerWithEmailAndPasswordDoctor, registerWithEmailAndPasswordPatient, sendPasswordReset, logout }