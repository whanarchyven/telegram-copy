"use client"
import Image from "next/image";
import Messages from "@/app/chat/ui/messages";
import Message, {MessageProps} from "@/app/chat/ui/messages/message-components/message/index";
import Voice, {VoiceMessageProps} from "@/app/chat/ui/messages/message-components/voice";
import {messagesSelectors} from "@/app/store/messagesSlice";
import {useAppSelector} from "@/app/store/hooks/useAppSelector";
import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";
import {getDialogue} from "@/app/data/get-dialogue";
import {ClipLoader} from "react-spinners";
export default function Home() {

    //Подключаем редукс

    const params = useSearchParams();

    const chat_id = params.get('chat_id');

    // const storeMessagesState=useAppSelector(messagesSelectors.messages)
    //
    // const [messages,setMessages]=useState<Array<MessageProps | VoiceMessageProps>>([])
    //
    // useEffect(() => {
    //     setMessages([...storeMessagesState.messages])
    // }, [storeMessagesState]);

    const [messages,setMessages]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(() => {
        getDialogue(chat_id??'').then((res)=>{
            console.log(res.data)
            setMessages(res.data)
            setLoading(false)
        })
    }, []);

    return (
        <main className={'w-full h-full flex items-center justify-center'}>
            {loading?<ClipLoader color={'#0E76F1'}/>:<Messages messages={messages}/>}
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
