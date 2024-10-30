"use client"

import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {getDialogue} from "@/app/data/get-dialogue";
import {ClipLoader} from "react-spinners";
import Messages from "@/app/chats/[chat_id]/ui/messages";

export default function ChatPage({params}: { params: { chat_id: string } }) {
    const chat_id = params.chat_id;

    const [messages, setMessages] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getDialogue(chat_id ?? '').then((res) => {
            console.log(res.data)
            setMessages(res.data)
            setLoading(false)
        })
    }, []);

    return (
        <main className={'w-full h-full flex items-center justify-center'}>
            {loading ? <ClipLoader color={'#0E76F1'}/> : <Messages messages={messages}/>}
        </main>
    );
}
