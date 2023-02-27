import {
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    getAdditionalUserInfo,
  } from "firebase/auth";
import { auth, googleProvider } from "./config";
// import { createUser } from "";

// HANDLE SING IN OR REGISTER USING GOOGLE PROVIDER
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("Registro")
    } catch (error) {
        console.error(error)
    }
  };