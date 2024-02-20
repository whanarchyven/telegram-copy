"use client"
import React, {useState} from 'react';
import TextareaAutosize from "react-textarea-autosize";
import {useAppDispatch} from "@/app/store/hooks/useAppDispatch";
import {messagesActions} from "@/app/store/messagesSlice";
import {chatIdActions} from "@/app/store/chatIdSlice";
import {dialogues} from "@/app/data/dialogues";
import {useAppSelector} from "@/app/store/hooks/useAppSelector";
import {chatIdSelectors} from "@/app/store/chatIdSlice";

const MessageContainer = () => {

    const [message, setMessage] = useState('')
    const [messagesCount, setMessagesCount] = useState(0)
    const dispatch = useAppDispatch()
    const sendMessage = (message: string) => {
        let temp = new Date()
        dispatch(messagesActions.addMessage({message: message, time: temp.toISOString(), type: 'mine'}))
        dispatch(chatIdActions.setStatus({status: 'online'}))
        setTimeout(() => {
            dispatch(chatIdActions.setStatus({status: 'typing'}))
        }, 1000)
    }

    const data = dialogues

    const storeChatId = useAppSelector(chatIdSelectors.chatId)

    const findDialogue = (chatId: string) => {
        const index = data.find(item => item.id == chatId)
        if (index) {
            return index
        } else {
            return data[0]
        }
    }
    const requestMessage = (chatId: string) => {
        let temp = new Date()
        const dialogue = findDialogue(chatId)
        const answerMessage = dialogue.body[messagesCount]

        answerMessage.answers.map((item) => {
            setTimeout(() => {
                dispatch(messagesActions.addMessage({message: item, time: temp.toISOString(), type: 'foreign'}))
                dispatch(chatIdActions.setStatus({status:'online'}))
            }, dialogue.body[messagesCount].delay * 50)

        })
        setMessagesCount(messagesCount + 1)

    }

    return (
        <div
            className={' w-full bottom-0 bg-white bg-opacity-80 flex flex-col items-center justify-start pt-2 pb-[3.3rem] backdrop-blur-3xl h-fit'}>
            <div className={'flex w-full items-end gap-3 px-3'}>
                <img className={'w-[1.3rem] pb-1'} src={'/images/scrap.svg'}/>
                <div className={'bg-white flex items-end px-3 pr-2 gap-1 w-full rounded-2xl py-[0.1rem]'}>
                    <TextareaAutosize value={message} onChange={(event: any) => {
                        setMessage(event.target.value)
                    }} className={'text-lg w-full focus:outline-none hover:outline-none font-sf'}
                                      placeholder={'Сообщение'}
                                      maxRows={12}/>
                    {message.length > 0 ? <img className={'w-[1.3rem] pb-1'} src={'/images/emoji.svg'}/> :
                        <img className={'w-[1.3rem] pb-1'} src={'/images/stickers.svg'}/>}
                </div>
                {message.length > 0 ?
                    <div onClick={() => {
                        sendMessage(message);
                        setMessage('')
                        requestMessage(storeChatId.chatId)
                    }}
                         className={'w-[28px] aspect-square h-[28px] p-1.5 flex items-center justify-center rounded-full bg-cBlue'}>
                        <img className={'h-full'} src={'/images/send_message.svg'}/>
                    </div> : <img className={'h-[28px] pb-1'} src={'/images/micro.svg'}/>}
            </div>
        </div>
    );
};

export default MessageContainer;