import React, { useContext, useEffect, useState } from "react";
import { SendMessage } from "./components/SendMessage";
import { ChatsBox } from "./components/ChatsBox";
import { MessagesBox } from "./components/MessagesBox";
import { UserContext } from "../../context/userContext";
import { getUserById } from "../../firebase/users";
import { ChatsContext } from "../../context/chatsContext";
import { ChatHeader } from "./components/ChatHeader";
import { Navbar } from "../../components/Navbar";

export function ChatPage() {
  return (
    <div className="flex">
      <div>
        <Navbar></Navbar>
      </div>
      <section className="max-w-[48%] bg-white ml-0.5 pl-10 pr-10 text-gray-600p-4">
        <div className="mx-auto bg-white rounded-lg">
          <header className="pt-6 pb-4 px-5 border-b border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <div className="pr-1">
                  <h2 className="text-xl leading-snug font-bold">Messages</h2>
                </div>
              </div>

              <div className="relative inline-flex flex-shrink-0"></div>
            </div>
          </header>

          <ChatsBox />
        </div>
      </section>
      <section className="grow bg-white shadow-xl rounded-lg flex-col flex h-fit sm:h-screen">
        <ChatHeader />

        <MessagesBox />

        <SendMessage />
      </section>
    </div>
  );
}
