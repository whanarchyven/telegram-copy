"use client"


import {Suspense} from "react";
import Header from "@/app/chats/[chat_id]/ui/header";
import MessageContainer from "@/app/chats/[chat_id]/ui/message-container";
import Navbar from "@/app/ui/navbar";
import {useWindowSize} from "react-use";

export default function ChatLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const width=useWindowSize().width

    return (
        <div className={'flex w-full'}>
            <div className={'flex w-full flex-col h-screen'}>
                <Suspense>
                    <Header/>
                    {children}
                    <MessageContainer/>
                </Suspense>
            </div>
        </div>
    );
}
