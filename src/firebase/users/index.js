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
  export const FEEDBACKS_COLLECTION = "feedbacks";
export const APPOINTMENT_COLLECTION = "appointments";
  
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
  
  // export async function getUserById(userId) {
  //   const userRef = doc(db, USERS_COLLECTION, userId);
  //   const user = await getDoc(userRef);
  //   return ({
  //     ...user.data(),
  //     id: user.id,
  //   });
  // }

  export async function getUserById(userId) {
    const userRef = doc(db, USERS_COLLECTION, userId);
    return getDoc(userRef);
  }

  export async function getFeedBack(feedbackId) {
    const feedBackRef = doc(db, FEEDBACKS_COLLECTION, feedbackId);
    return getDoc(feedBackRef);
  }
  
  export async function getFeedBacks(feedbackIds) {
    if (feedbackIds.length == 0 ){
      return null
    }
    const feedbackDoctorQuery = query(
      collection(db, FEEDBACKS_COLLECTION),
      where("id", "in", feedbackIds)
    );
    const results = await getDocs(feedbackDoctorQuery);
    if (results.size > 0) {
      const feedbacks = results.docs.map((item) => ({
        ...item.data(),
        id: item.id,
      }));
     
      return feedbacks;
    }

    return null;
  }
  
export async function updateAppointment(appointmentId, data) {
  const appointmentRef = doc(db, "appointments", appointmentId);
  return updateDoc(appointmentRef, data);
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
}

export async function getAppointmentId(id) {
  const appointmentQuery = doc(db, APPOINTMENT_COLLECTION, id)
  const results = await getDoc(appointmentQuery);
  return results.data();
}
