import { useContext, useEffect, useRef, useState } from "react";
import { Loading } from "../../../components/Loading";
import { ChatsContext } from "../../../context/chatsContext";
import { UserContext } from "../../../context/userContext";
import { getUserById } from "../../../firebase/users";


export function MessagesBox() {
    // const messagesEndRef = useRef();

    const { user } = useContext(UserContext);

    const { loadingMessages, messages, chat } = useContext(ChatsContext);


    if (!messages) {
        return <div className="flex flex-col bg-white h-screen text-center justify-center items-center">
            <span className="text-black">Unselected chat</span>
        </div>
    }

    if (loadingMessages) {
        return (<Loading />);
    }

    return (
        <div className="overflow-auto h-screen px-8">
            {messages?.map((message) => {
                /* const [chatUser, setChatUser] = useState(null);
                const [chatUserLoading, setChatUserLoading] = useState(true);

                useEffect(() => {
                    async function getChatUser() {
                        const chatUser = await getUserById(chat.doctorId == user.id ? chat.patientId : chat.doctorId);
                        setChatUser(chatUser);
                        setChatUserLoading(false)
                    }
                    getChatUser();
                }, []); */

                /* if (chatUserLoading)
                    return (<></>); */

                return message.from === user.email ? (
                    <div key={message.id} className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
                        <div>
                            <div className="bg-[#00786a] text-white p-3 rounded-l-lg rounded-br-lg">
                                <p className="text-sm">{message.message}</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(message.createdAt)}</span>
                        </div>
                        {/* <img src={user.profileImage} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                    </div>
                ) : (
                    <div key={message.id} className="flex w-full mt-2 space-x-3 max-w-xs">
                        {/* <img src={chatUser.profileImage} alt="" className="h-10 w-10 rounded-full bg-gray-50" /> */}
                        <div>
                            <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                                <p className="text-sm">{message.message}</p>
                            </div>
                            <span className="text-xs text-gray-500 leading-none">{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(message.createdAt)}</span>
                        </div>
                    </div>

                );
            })}
        </div>
    )
}