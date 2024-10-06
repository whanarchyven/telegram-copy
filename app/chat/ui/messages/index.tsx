"use client"
import {FC, useEffect, useRef, useState} from 'react';
import Message, {MessageProps} from "./message-components/message";
import AudioVisualizer from "@/app/chat/ui/messages/message-components/voice/ui/audio-visualizer";
import Voice, {VoiceMessageProps} from "./message-components/voice";
import {format} from "date-fns";

export interface MessagesInterface {
    messages: Array<{
        user_id: string,
        username: string,
        text: string,
        tg_account: string,
        type: string,
        created_at: string
    } | VoiceMessageProps>
}

const Messages: FC<MessagesInterface> = ({messages}) => {

    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current && messages.length > 0) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages]);


    return (
        <div className={'h-full relative w-full'}>
            <img src={'/images/bg_overlay.png'} className={'h-screen w-full absolute left-0 top-0'}>

            </img>
            <div ref={containerRef}
                 className="absolute bottom-0 pt-16 h-fit scroll-smooth flow-root items-end gap-2 justify-end max-h-full left-0 w-full overflow-y-scroll">
                {messages.map((message, counter) => {
                    if ("duration" in message) {
                        return <div key={counter} className={'my-2'}>
                            <Voice hideTail={true} {...message} />
                        </div>;
                    } else {
                        return (
                            <div key={counter} className={'my-2'}>
                                <Message hideTail={false} author={message.username} status={'accepted'} type={message.type=='sent'?'mine':'foreign'} time={format(new Date(message.created_at),'hh:mm')}>
                                    {message.text}
                                </Message>
                            </div>
                        );
                    }
                })}
            </div>


        </div>
    );
};

export default Messages;