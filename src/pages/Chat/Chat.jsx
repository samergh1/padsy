import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { ChatContext } from "../../context/chat";
import { useNavigate } from "react-router-dom";
// import Moment from "react-moment";

const userId = 'from';

export function ChatPage() {
	const navigate = useNavigate();
	const { user, persistUser, signOut } = useContext(UserContext);
	const { sendMessage, getChatHistory, chatData, loading, updateChatHistory } =
		useContext(ChatContext);
	const [messageToSave, setMessageToSave] = useState("");

	useEffect(() => {
		getChatHistory();
		//eslint-disable-next-line
	}, []);

	const signUserOut = () => {
		signOut();
		navigate("/admin/login");
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email } = user;
		await sendMessage(email, messageToSave);
		updateChatHistory();
		setMessageToSave("");
	};

	const chatHistory =
		chatData.length > 0
			? chatData.sort((a, b) => {
				return a.time - b.time;
			})
			: null;

	if (loading) {
		return <div className='container'>Loading chat...</div>;
	}

	return (
		<div className='grid grid-flow-col grid-cols-2'>

			{/* flex flex-col */}
			<div className='grid-cols-2 grid'>
				<div className=''></div>
				<section className=" antialiased bg-white text-gray-600 min-h-screen p-4 ">
					<div className="h-full">

						<div className="relative  mx-auto bg-white rounded-lg">

							<header className="pt-6 pb-4 px-5 border-b border-gray-200">
								<div className="flex justify-between items-center mb-3">

									<div className="flex items-center">
										<div className="pr-1">
											<a className="inline-flex text-gray-800 hover:text-gray-900" href="#0">
												<h2 className="text-xl leading-snug font-bold"> Messages</h2>
											</a>
										</div>
									</div>

									<div className="relative inline-flex flex-shrink-0">
									</div>
								</div>
							</header>

							<div className="py-3 px-5">
								<h3 className="text-xs font-semibold uppercase text-gray-400 mb-1">Chats</h3>

								<div className="divide-y divide-gray-200">

									<button className="w-full text-left py-2 focus:outline-none focus-visible:bg-indigo-50 hover:bg-[#00786a] rounded-l">
										<div className="flex items-center">
											<div>
												<h4 className="text-sm font-semibold text-gray-900">Marie Zulfikar</h4>
												<div className="text-[13px]">The video chat ended · 2hrs</div>
											</div>
										</div>
									</button>


								</div>
							</div>

						</div>
					</div>
				</section>
			</div>




			<div className='h-screen'>
				<div className=" bg-white shadow-xl rounded-lg">

					<header className='border-b border-solid p-4 '>
						<ul className="flex justify-center align-middle">
							<li className="mr-6">
								<p>Lauren Marsano</p>
							</li>
						</ul>
					</header>

					<div className="overflow-auto h-screen px-8">
						{chatHistory?.map((c) => {
							return c.from === user.email ? (
								<div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
									<div>
										<div className="bg-[#00786a] text-white p-3 rounded-l-lg rounded-br-lg">
											<p className="text-sm">{c.message}</p>
										</div>
										<span className="text-xs text-gray-500 leading-none">2 min ago</span>
									</div>
									<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
								</div>
							) : (
								<div className="flex w-full mt-2 space-x-3 max-w-xs">
									<div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"></div>
									<div>
										<div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
											<p className="text-sm">{c.message}</p>
										</div>
										<span className="text-xs text-gray-500 leading-none">{c.time}</span>
									</div>
								</div>

							);
						})}

					</div>

					<div className="bg-gray-300 p-4">
						<form onSubmit={handleSubmit} className='chat-form'>
							<input
								className='flex items-center h-10 w-full rounded px-3 text-sm'
								type='text'
								value={messageToSave}
								onChange={(e) => setMessageToSave(e.target.value)}
							/>
						</form>
					</div>
				</div>
			</div>


		</div>
	)
}
