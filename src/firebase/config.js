// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC00h6E4p0wIFYHVvnCf6pe6hwu89xiGIE",
  authDomain: "proyecto-sistemas-de-info.firebaseapp.com",
  projectId: "proyecto-sistemas-de-info",
  storageBucket: "proyecto-sistemas-de-info.appspot.com",
  messagingSenderId: "359781594062",
  appId: "1:359781594062:web:17af9d6dbc4ebeb15ff19f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
