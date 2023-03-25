import { useContext, useEffect, useRef } from "react";
import { ChatsContext } from "../../../context/chatsContext";
import { UserContext } from "../../../context/userContext";


export function MessagesBox() {
    // const messagesEndRef = useRef();

    const { user } = useContext(UserContext);

    const { loadingMessages, messages } = useContext(ChatsContext);

    // const scrollToBottom = () => {
    //     messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    // };
    // useEffect(scrollToBottom, [messages])

    if (!messages) {
        return <div>
            SIN CHAT SELECCIONADO
        </div>
    }

    if (loadingMessages) {
        return <div className='container'>Loading chat...</div>;
    }

    return (
        <div className="overflow-auto h-screen px-8">
            {messages?.map((message) => {
                return message.from === user.email ? (
                    <div key={message.id} className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-[#00786a] text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">{message.message}</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(message.createdAt)}</span>
                        </div>
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                    </div>
                ) : (
                    <div key={message.id} className="flex w-full mt-2 space-x-3 max-w-xs">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
                        <div>
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                <p className="text-sm">{message.message}</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">{message.createdAt}</span>
                        </div>
                    </div>

                );
            })}
        </div>
    )
}