import { useContext, useEffect, useState } from "react";
import { ChatsContext } from "../../../context/chatsContext";
import { UserContext } from "../../../context/userContext";
import { getUserById } from "../../../firebase/users";

export function UserChat({ chat }) {
    const { setNewChat } = useContext(ChatsContext);

    const { user } = useContext(UserContext);

    const [loading, setLoading] = useState(true);
    const [chatUser, setChatUser] = useState(null);

    useEffect(() => {
        async function getChatUser() {
            const chatUser = await getUserById(user.isDoctor ? chat.patientId : chat.doctorId);
            setChatUser(chatUser);
            setLoading(false);
        }
        if (!chatUser) {
            getChatUser();
        }
    }, []);

    return (
        <div className="divide-y bg-transparent">
            <button onClick={() => {
                setNewChat(chat);
            }}
                className="w-full text-left py-2 focus:outline-none hover:bg-gray-100 rounded-l">
                <div className="flex items-center">
                    <div>
                        <h4 className="text-sm font-semibold text-gray-900">{loading ? 'Loading...' : chatUser.name}</h4>
                        <h4 className="text-sm font-semibold text-gray-500">{loading ? 'Loading...' : chatUser.email}</h4>
                        <div className="text-[13px]">{loading ? 'Loading...' : chatUser.specialty}</div>
                    </div>
                </div>
            </button>
        </div>
    )
}