"use client"
import {dialogues} from "@/app/data/dialogues";
import ChatTab from "@/app/chats/ui/chat-tab";
import {colorInterface} from "@/app/chat/ui/header";
import {useAppDispatch} from "@/app/store/hooks/useAppDispatch";
import {messagesActions, messagesSelectors} from "@/app/store/messagesSlice";
import {useRouter} from "next/navigation";

export default function Home() {

    const chats = dialogues

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

    const dispatch=useAppDispatch()
    const router=useRouter()

    return (
        <main className={'w-full h-full flex flex-col p-4'}>
            {chats.map((chat, counter) => {
                return (
                    <div key={counter} onClick={()=>{
                        dispatch(messagesActions.reset({}))
                        router.push(`/chat?chatId=${chat.id}&color=${translateColorType(colors[counter])}&name=${chat.name}`)
                    }}>
                        <ChatTab name={chat.name} color={translateColorType(colors[counter])}
                                 startMessage={chat.startMessage} timeStamp={'вт'}/>
                    </div>
                )
            })}
        </main>
    );
}