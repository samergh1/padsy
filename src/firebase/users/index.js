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
import { firestore as db } from "../config";

export const USERS_COLLECTION = "users";

// Funcion que consigue un arreglo de doctores de la DB
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