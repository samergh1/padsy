import { useContext, useState } from "react";
import { ChatsContext } from "../../../context/chatsContext";
import { UserContext } from "../../../context/userContext";
import { createMessage } from "../../../firebase/chat/messages";

export function SendMessage() {
    const { user } = useContext(UserContext);

    const { chat, messages, loadingMessages } = useContext(ChatsContext);

    const [value, setValue] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { email } = user;
        await createMessage(email, value, chat.id);
        setValue("");
    };

    if (!messages || loadingMessages) {
        return (<></>)
    }

    return (
        <div className="bg-gray-300 p-4">
            <form onSubmit={handleSubmit} className='chat-form'>
                <input
                    className='flex items-center h-10 w-full rounded px-3 text-sm'
                    type='text'
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </form>
        </div>
    )
}