import { signInWithEmailAndPassword, signInWithPopup } from "@firebase/auth";
import { auth, googleProvider } from "../firebase/config";

class AuthTemplate {
    constructor() { }

    async authenticate() {
        try {
            await Promise.resolve();
            const credential = await this.authenticateUser();
            return this.displayUserInfo();
        } catch (error) {
            return this.displayError(error);
        }
    }

    async authenticateUser() {
        throw new Error('authenticateUser must be implemented');
    }

    displayUserInfo() {
        throw new Error('displayUserInfo must be implemented');
    }

    displayError(error) {
        console.error(error);
    }
}

class PatientAuthentication extends AuthTemplate {
    constructor(email, password, data) {
        super();
        this.email = email;
        this.password = password;
        this.data = data;
    }

    async authenticateUser() {
        const result = await signInWithEmailAndPassword(auth, this.email, this.password);
        return result;
    }

    displayUserInfo() {
        const user = this.auth.currentUser;
        console.log(`Paciente autenticado: ${user.email}`);
    }
}

class DoctorAuthentication extends AuthTemplate {
    constructor(data) {
        super();
        this.data = data;
    }

    async authenticateUser() {
        const result = await signInWithPopup(auth, googleProvider);
        return result;
    }

    displayUserInfo() {
        const user = firebase.auth().currentUser;
        console.log(`Doctor autenticado: ${user.displayName}`);
    }
}