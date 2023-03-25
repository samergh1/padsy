import { addDoc, collection, getDocs, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../config";

export const CHATS_COLLECTION = "chats";

export async function createChat(doctorId, patientId) {
    try {
        await addDoc(collection(db, CHATS_COLLECTION), {
            doctorId: doctorId,
            patientId: patientId,
            createdAt: Date.now(),
        });
    } catch (error) {
        console.error("Error creating chat ", error);
    }
};

export async function getChats(setChats) {
    const q = query(
        collection(db, CHATS_COLLECTION),
        orderBy("lastMessageAt"),

    );
    return onSnapshot(q, (querySnapshot) => {
        const chats = [];

        querySnapshot.forEach((doc) => {
            chats.push({ ...doc.data(), id: doc.id });
        });
        setChats(chats);
    });
}