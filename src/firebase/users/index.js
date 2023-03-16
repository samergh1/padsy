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

export async function getUserById(userId) {
  const userRef = doc(db, USERS_COLLECTION, userId);
  const user = await getDoc(userRef);
  return ({
    ...user.data(),
    id: user.id,
  });
}

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
    // console.log(user);
    return user;
  }

  return null;
}

export async function getUserById(userId) {
  const userRef = doc(db, USERS_COLLECTION, userId);
  const item = await getDoc(userRef)
  return ({
    ...item.data(),
    id: item.id,
  });
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