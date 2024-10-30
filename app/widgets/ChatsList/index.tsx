"use client"
import {dialogues} from "@/app/data/dialogues";
import ChatTab from "@/app/chats/ui/chat-tab";

import {useAppDispatch} from "@/app/store/hooks/useAppDispatch";
import {messagesActions, messagesSelectors} from "@/app/store/messagesSlice";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {getDialogues} from "@/app/data/get-dialogues";
import {ClipLoader} from "react-spinners";
import {format} from "date-fns";
import {colorInterface} from "@/app/chats/[chat_id]/ui/header";
import clsx from "clsx";

interface ChatListInterface {
    className?:string
}

export default function ChatsList({className}:ChatListInterface) {

    const chats = dialogues

    const [loading, setLoading] = useState(true)

    const [dialogue, setDialogues] = useState<Array<{
        username: string,
        user_id: string,
        time: string
    }>>([])

    useEffect(() => {
        getDialogues().then((res) => {
            console.log(res.data.chats)
            setDialogues(res.data.chats)
            setLoading(false)
        })
    }, []);

    const colors = [
        'pink',
        'blue',
        'green',
        'indigo',
        'yellow',
        'pink',
        'blue',
        'green',
        'indigo',
        'yellow'
    ]

    const translateColorType = (color: string | null | undefined): colorInterface['color'] => {
        if (color == 'pink' || color == 'blue' || color == 'green' || color == 'indigo' || color == 'yellow') {
            return color;
        } else {
            return 'pink';
        }
    }

    const dispatch = useAppDispatch()
    const router = useRouter()

    return (
        <main className={clsx('w-full h-full flex flex-col p-4',className??'')}>
            {loading ? <div className={'flex justify-center'}><ClipLoader color={'#0E76F1'}/></div> : <>
                {dialogue.map((chat, counter) => {
                    return (
                        <div key={counter} onClick={() => {
                            dispatch(messagesActions.reset({}))
                            router.push(`/chats/${chat.user_id}?name=${chat.username}`)
                        }}>
                            <ChatTab name={chat.username} color={translateColorType(colors[counter])}
                                     startMessage={'chat'} timeStamp={format(new Date(chat.time), 'hh:mm dd MM')}/>
                        </div>
                    )
                })}
            </>}
        </main>
    );
}