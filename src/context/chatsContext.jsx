import React, { useEffect, useState } from "react";
import { getChats } from "../firebase/chat/chat";
import { getMessages } from "../firebase/chat/messages";

export const ChatsContext = React.createContext();

export const ChatsProvider = ({ children }) => {
    const [chat, setChat] = useState(null);

    const [messages, setMessages] = useState(null);
    const [loadingMessages, setLoadingMessages] = useState(false);

    const [chats, setChats] = useState([]);
    const [loadingChats, setLoadingChats] = useState(true);

    useEffect(() => {
        console.log('a')
        const unsubscribe = getChats(setChats)
        setLoadingChats(false);
        return () => unsubscribe;
    }, []);

    const setNewChat = async (newChat) => {
        if (newChat != null) {
            setChat(newChat);
            setLoadingMessages(true);
        }
    }

    useEffect(() => {
        console.log('b')
        if (chat != null) {
            console.log('c')
            const unsubscribe = getMessages(setMessages, chat.id)
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
            }}>
            {children}
        </ChatsContext.Provider>
    );
}