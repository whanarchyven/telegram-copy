"use client"
import {FC, useEffect, useState} from 'react';
import {cva} from "class-variance-authority";
import {VariantProps} from "class-variance-authority";
import Message, {MessageProps} from "@/app/chat/ui/messages/message-components/message";
import Play from "/public/images/icons/play.svg"
import AudioVisualizer from "./ui/audio-visualizer";
import {format, intervalToDuration} from "date-fns";

export interface VoiceMessageProps extends Omit<MessageProps, 'children' | 'category'> {
    duration: number,
}

const cvaVoiceMessageContainer = cva(['flex gap-3 pt-2 items-start'])
const cvaPlayButtonContainer = cva(['w-11 h-11 p-3.5 flex items-center justify-center rounded-full'], {
    variants: {
        type: {
            mine:['bg-cGreenAccent'],
            foreign:['bg-cBlue']
        }
    }
})
const cvaPlayButtonIcon=cva(['w-full h-full'],{
    variants:{
        type: {
            mine:['fill-cGreen'],
            foreign:['fill-white']
        }

    }
})

const cvaDataContainer=cva(['flex overflow-clip flex-col gap-1'])
const cvaDurationTitle=cva(['text-xs font-sf'],{variants:{
        type: {
            mine:['text-cGreenAccent'],
            foreign:['text-cGray']
        }

    }})

const VoiceMessage: FC<VoiceMessageProps> = ({time, status, author, type, duration}) => {

    const [randomAudioData, setRandomAudioData] = useState<number[]>([])
    useEffect(() => {
        const length = 100
        let temp = []
        for (let i = 0; i < length; i++) {
            temp.push(Math.floor(Math.random() * (100 - 1) + 1))
        }
        setRandomAudioData([...temp])
    }, []);

    const durationFormat = intervalToDuration({start: 0, end: (duration ?? 1) * 1000})
    const zeroPad = (num: number) => String(num).padStart(2, '0')

    const formatted = `${zeroPad(durationFormat.minutes ?? 0)}:${zeroPad(durationFormat.seconds ?? 0)}`


    const minWidth = 100;
    const maxWidth = 200;

    return (
        <Message type={type} time={time} status={status} author={'send'} category={'voice'}>
            <div className={cvaVoiceMessageContainer()}>
                <div className={cvaPlayButtonContainer({type: type})}>
                    <Play className={cvaPlayButtonIcon({type: type})}/>
                </div>
                <div style={{width: (minWidth + duration) >= maxWidth ? maxWidth : minWidth + duration}}
                     className={cvaDataContainer()}>
                    <AudioVisualizer type={type} audioData={randomAudioData}/>
                    <p className={cvaDurationTitle({type: type})}>{formatted}</p>
                </div>
            </div>
        </Message>
    );
};

export default VoiceMessage;