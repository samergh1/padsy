import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { CHATS_COLLECTION } from "../firebase/chat/chat";
import { getMessages } from "../firebase/chat/messages";
import { db } from "../firebase/config";
import { UserContext } from "./userContext";

export const ChatsContext = React.createContext();

export const ChatsProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [chat, setChat] = useState(null);

  const [messages, setMessages] = useState(null);
  const [loadingMessages, setLoadingMessages] = useState(false);

  const [chats, setChats] = useState([]);
  const [loadingChats, setLoadingChats] = useState(true);

  async function getChats() {
    const q = query(collection(db, CHATS_COLLECTION), orderBy("createdAt"));
    return onSnapshot(q, (querySnapshot) => {
      const chats = [];

      querySnapshot.forEach((doc) => {
        chats.push({ ...doc.data(), id: doc.id });
      });

      const newChat = chats.filter((chat) => {
        const checkPatient = chat.patientId == user.id;
        const checkDoctor = chat.doctorId == user.id;
        return checkPatient || checkDoctor;
      });

      setChats(newChat);
    });
  }

  useEffect(() => {
    if (!!user) {
      const unsubscribe = getChats();
      setLoadingChats(false);
      return () => unsubscribe;
    }
  }, [user]);

  const setNewChat = async (newChat) => {
    if (newChat != null) {
      setChat(newChat);
      setLoadingMessages(true);
    }
  };

  useEffect(() => {
    if (chat != null) {
      const unsubscribe = getMessages(setMessages, chat.id);
      setLoadingMessages(false);
      return () => unsubscribe;
    }
  }, [chat]);

  return (
    <ChatsContext.Provider
      value={{
        chat,
        messages,
        setNewChat,
        loadingMessages,
        chats,
        loadingChats,
      }}
    >
      {children}
    </ChatsContext.Provider>
  );
};
