import React, { useContext, useEffect, useState } from "react";
import { SendMessage } from "./components/SendMessage";
import { ChatsBox } from "./components/ChatsBox";
import { MessagesBox } from "./components/MessagesBox";
import { UserContext } from "../../context/userContext";
import { getUserById } from "../../firebase/users";
import { ChatsContext } from "../../context/chatsContext";
import { ChatHeader } from "./components/ChatHeader";

export function ChatPage() {

	return (
		<div className='flex'>
			<section className="bg-white px-10 text-gray-600p-4">
				<div className="mx-auto bg-white rounded-lg">

					<header className="pt-6 pb-4 px-5 border-b border-gray-200">
						<div className="flex justify-between items-center mb-3">

							<div className="flex items-center">
								<div className="pr-1">
									<a className="inline-flex text-gray-800 hover:text-gray-900" href="#0">
										<h2 className="text-xl leading-snug font-bold">Messages</h2>
									</a>
									<div className="flex items-center">
										<div className="flex border border-purple-200 rounded mt-5">
											<input
												type="text"
												className="block w-full px-4 py-2 text-[#00786a] bg-white border rounded-md"
												placeholder="Search..."
											/>
											<button className="px-4 text-white bg-[#00786a] border-l rounded ">
												Search
											</button>
										</div>
									</div>
								</div>
							</div>

							<div className="relative inline-flex flex-shrink-0">
							</div>
						</div>
					</header>

					<ChatsBox />

				</div>
			</section>
			<section className="grow bg-white shadow-xl rounded-lg flex-col flex h-screen">
				<ChatHeader />

				<MessagesBox />

				<SendMessage />

			</section>
		</div>

	)
}
