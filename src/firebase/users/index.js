import {
    doc,
    addDoc,
    collection,
    updateDoc,
    getDoc,
    setDoc,
    getDocs,
    query,
    where,
  } from "firebase/firestore";
  import { db } from "../config";
  
  export const USERS_COLLECTION = "users";
  
  export async function createUser(data) {
    const { uid, ...restData } = data;
  
    if (uid) {
      return setDoc(doc(db, USERS_COLLECTION, uid), restData);
    }
  
    return addDoc(collection(db, USERS_COLLECTION), restData);
  }
  
  export async function updateUser(userId, data) {
    const userRef = doc(db, USERS_COLLECTION, userId);
    return updateDoc(userRef, data);
  }
  
  export async function getUserById(userId) {
    const userRef = doc(db, USERS_COLLECTION, userId);
    return getDoc(userRef);
  }

  export async function getFeedBack(feedbackId) {
    const feedBackRef = doc(db, FEEDBACKS_COLLECTION, feedbackId);
    return getDoc(feedBackRef);
  }

  export async function getUsersDoctors() {
    const userDoctorQuery = query(
      collection(db, USERS_COLLECTION),
      where("isDoctor", "==", true)
    );
    const results = await getDocs(userDoctorQuery);

    if (results.size > 0) {
      const doctors = results.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
     
      return doctors;
    }

    return null;
  }
  
  export async function getUserProfile(email) {
    const userQuery = query(
      collection(db, USERS_COLLECTION),
      where("email", "==", email)
    );
  
    const results = await getDocs(userQuery);
  
    if (results.size > 0) {
      const [user] = results.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
      return user;
    }
  
    return null;
  }