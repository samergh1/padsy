import { useContext, useEffect, useState } from "react";
import { ChatsContext } from "../../../context/chatsContext";
import { UserChat } from "./UserChat";

export function ChatsBox() {
    const { loadingChats, chats } = useContext(ChatsContext);

    if (loadingChats) {
        return <div className='container'>Loading chat...</div>;
    }

    return (
        <div className="py-3 px-5">
            <h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>

            {chats?.map((chat) => (
                <UserChat key={chat.id} chat={chat} />
            ))}
        </div>
    );
}
