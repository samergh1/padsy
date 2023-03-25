import { auth, db } from "../config";
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

export const signInWithGoogle = async ({ onSuccess, onFail }) => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        console.log(user);
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        {docs.docs.length === 0 ? onFail() : onSuccess()};
        // if (docs.docs.length === 0) {
        //     onFail();
        // } else {
        //     onSuccess();
        // }
    } catch (err) {
        console.error(err);
    }
};

export const signUpWithGoogle = async ({ isDoctor, onSuccess }) => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        console.log(user);
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            if (!isDoctor) {
                await setDoc(doc(db, "users", user.uid), {
                    uid: user.uid,
                    name: user.displayName,
                    phoneNumber: user.phoneNumber,
                    authProvider: "google",
                    isDoctor: false,
                    email: user.email,
                });
            } else {
                return user;
            }
        }

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
    }
};

export const logInWithEmailAndPassword = async ({ email, password, onSuccess }) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
        if (err.toString().includes("password")) {
            alert("Wrong password")
        } else {
            alert("Wrong email")
        }
    }
};

export const registerWithEmailAndPasswordDoctor = async ({ name, email, password, phoneNumber, address, specialty, description, profileImage, cost, isDoctor, onSuccess }) => {
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
            description,
            profileImage,
            cost,
            isDoctor
        });

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
    }
};

export const registerWithEmailAndPasswordPatient = async ({ name, email, password, phoneNumber, gender, birthdate, profileImage, isDoctor, onSuccess }) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
            phoneNumber,
            gender,
            birthdate,
            profileImage,
            isDoctor
        });

        if (onSuccess) {
            onSuccess();
        }
    } catch (err) {
        console.error(err);
    }
};

export const sendPasswordReset = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        alert("Password reset link sent!");
    } catch (err) {
        console.error(err);
    }
};

export const logout = () => {
    signOut(auth);
};
