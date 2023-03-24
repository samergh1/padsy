import { useContext, useEffect, useState } from "react";
import { ChatsContext } from "../../../context/chatsContext";
import { UserContext } from "../../../context/userContext";
import { getUserById } from "../../../firebase/users";


export function ChatHeader() {
    const { chat } = useContext(ChatsContext);

    const { user } = useContext(UserContext);

    const [loading, setLoading] = useState(true);
    const [chatUser, setChatUser] = useState(null);

    useEffect(() => {
        async function getChatUser() {
            const chatUser = await getUserById(user.isDoctor ? chat.patientId : chat.doctorId);
            setChatUser(chatUser);
            setLoading(false);
        }
        if (!chatUser && chat != null) {
            getChatUser();
        }
    }, [chat]);

    if (!chat) {
        return <></>
    }

    return (
        <header className='border-b border-solid p-4 '>
            <ul className="flex justify-center items-center">
                <li className="mr-6">
                    <p>{loading ? 'Loading...' : chatUser.name}</p>
                </li>
            </ul>
        </header>
    )
}