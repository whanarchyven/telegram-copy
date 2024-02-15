"use client"
import Image from "next/image";
import Messages from "@/app/components/messages";
import Message, {MessageProps} from "@/app/components/messages/message-components/message/index";
import Voice, {VoiceMessageProps} from "@/app/components/messages/message-components/voice";
import {messagesSelectors} from "@/app/store/messagesSlice";
import {useAppSelector} from "@/app/store/hooks/useAppSelector";
import {useEffect, useState} from "react";
export default function Home() {

    //Подключаем редукс

    const data: Array<MessageProps | VoiceMessageProps> = [
        {
            category: 'default',
            author: 'whanarchyvven',
            status: 'send',
            time: '2024-02-14T19:24:59.318Z',
            type: 'foreign',
            children: 'Большинство мобилкой пользуются',
            duration:5
        },
        {
            category: 'default',
            author: 'whanarchyvven',
            status: 'send',
            time: '2024-02-14T19:24:59.318Z',
            type: 'mine',
            children: 'Большинство мобилкой пользуются'
        }
        ,
        {
            category: 'default',
            author: 'whanarchyvven',
            status: 'send',
            time: '2024-02-14T19:24:59.318Z',
            type: 'mine',
            children: 'Большинство мобилкой пользуются'
        }
        ,
        {
            category: 'default',
            author: 'whanarchyvven',
            status: 'send',
            time: '2024-02-14T19:24:59.318Z',
            type: 'mine',
            children: 'Большинство мобилкой пользуются'
        }

    ]

    const storeMessagesState=useAppSelector(messagesSelectors.messages)

    const [messages,setMessages]=useState<Array<MessageProps | VoiceMessageProps>>([])

    useEffect(() => {
        setMessages([...storeMessagesState.messages])
    }, [storeMessagesState]);

    return (
        <main className={'w-full h-full flex items-center justify-center'}>
            <Messages messages={messages}/>
        </main>
    );
}
//
// <Message category={'default'} author={'whanarchyvven'} hideTail status={'send'} time={'2024-02-14T19:24:59.318Z'} type={'mine'}>Большинство мобилкой пользуются</Message>
// <Message category={'default'} author={'Nick Erlan'} status={'accepted'} time={'2024-02-14T19:24:59.318Z'} type={'mine'}>Большинство мобилкой пользуются пользуются пользуются пользуются пользуются пользуются пользуются пользуются пользуются</Message>
// <Message category={'default'} author={'whanarchyvven'} status={'send'} time={'2024-02-14T19:24:59.318Z'} type={'foreign'}>Привет</Message>
// <Voice duration={20} time={'2024-02-14T19:24:59.318Z'} type={'foreign'} status={'send'} author={'Nick Erlan'}/>
// <Voice duration={5} time={'2024-02-14T19:24:59.318Z'} type={'foreign'} status={'send'} author={'Nick Erlan'}/>
// <Voice duration={470} time={'2024-02-14T19:24:59.318Z'} type={'foreign'} status={'send'} author={'Nick Erlan'}/>
// <Voice duration={470} time={'2024-02-14T19:24:59.318Z'} type={'mine'} status={'send'} author={'Nick Erlan'}/>
