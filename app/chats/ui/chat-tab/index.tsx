import { FC } from 'react';

import { cva } from "class-variance-authority";
import {colorInterface} from "@/app/chats/[chat_id]/ui/header";

export interface chatTabInterface {
    name: string,
    color: colorInterface['color'],
    startMessage: string,
    timeStamp: string
}

const cvaAvatar = cva(['w-[40px] h-[40px] shrink-0 aspect-square rounded-full bg-gradient-to-b flex text-white font-bold items-center justify-center capitalize'], {
    variants: {
        color: {
            pink: ['from-pink-300 to-pink-500'],
            blue: ['from-blue-300 to-blue-500'],
            green: ['from-green-300 to-green-500'],
            indigo: ['from-indigo-300 to-indigo-500'],
            yellow: ['from-yellow-300 to-yellow-500']
        },
    },
    defaultVariants: { color: 'pink' }
});

const ChatTab: FC<chatTabInterface> = ({ name, color, startMessage, timeStamp }) => {
    const getAvatarBody = (name: string) => {
        const split = name.split(' ');
        return split[0][0].concat(split[1] ? split[1][0] : '');
    };
    const avatarBody = getAvatarBody(name);

    return (
        <div className="flex w-full items-start py-1 pb-2.5 gap-4">
            <div className={cvaAvatar({ color: color })}>{avatarBody}</div>
            <div className="relative flex-grow flex flex-col">
                <div className="flex justify-between items-center">
                    <p className="truncate font-medium line-clamp-1 whitespace-nowrap font-sf text-lg flex-grow">{name}</p>
                    <p className="opacity-50 font-medium font-sf text-sm w-[60px] text-right">{timeStamp.split(' ')[0]}</p>
                </div>
                <p className="font-normal opacity-50 font-sf text-base truncate">{startMessage}</p>
                <div className="h-[1px] bg-black bg-opacity-10 mt-3"></div>
            </div>
        </div>
    );
};

export default ChatTab;
