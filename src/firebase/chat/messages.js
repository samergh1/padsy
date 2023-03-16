import { addDoc, collection, getDocs, onSnapshot, orderBy, query } from "@firebase/firestore";
import { db } from "../config";
import { CHATS_COLLECTION } from "./chat";

export const MESSAGES_COLLECTION = "messages";

export async function createMessage(from, message, chatId) {
    try {
        await addDoc(collection(db, CHATS_COLLECTION, chatId, MESSAGES_COLLECTION), {
            from: from,
            message: message,
            createdAt: Date.now()
        });
    } catch (error) {
        console.error("Error sending message ", error);
    }
};

export async function getMessages(setMessages, chatId) {
    const q = query(
        collection(db, CHATS_COLLECTION, chatId, MESSAGES_COLLECTION),
        orderBy("createdAt"),

    );
    return onSnapshot(q, (querySnapshot) => {
        const messages = [];
        querySnapshot.forEach((doc) => {
            messages.push({ ...doc.data(), id: doc.id });
        });
        setMessages(messages);
    });
}