// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC00h6E4p0wIFYHVvnCf6pe6hwu89xiGIE",
  authDomain: "proyecto-sistemas-de-info.firebaseapp.com",
  projectId: "proyecto-sistemas-de-info",
  storageBucket: "proyecto-sistemas-de-info.appspot.com",
  messagingSenderId: "359781594062",
  appId: "1:359781594062:web:17af9d6dbc4ebeb15ff19f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = app.firestore;

export { firestore }