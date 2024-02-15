import {FC, ReactNode} from 'react';
import {cva} from "class-variance-authority";
import {VariantProps} from "class-variance-authority";
import {format} from "date-fns";
import SendIcon from "/public/images/icons/message_send.svg"
import AcceptedIcon from "/public/images/icons/message_accepted.svg"
import Tail from "/public/images/icons/tails.svg"
import {motion} from "framer-motion";

export interface MessageProps extends VariantProps<typeof cvaMessageContainer> {
    children: ReactNode,
    time: string,
    status: 'send' | 'accepted',
    hideTail?: boolean
    author:string,
    category?:'default'|'voice',
    type:'mine'|'foreign'
}

const cvaMessageContainer = cva(['w-full px-3 flex relative items-center'], {
    variants: {
        type: {
            mine: ['justify-end'],
            foreign: ['justify-start']
        }
    }
})
const cvaMessage = cva(['pr-[12px] pl-[12px] pb-[7px] pt-[6px] drop-shadow font-sf max-w-[95%] flex gap-2 text-lg text-black'], {
    variants: {
        type: {
            mine: ['bg-cGreen rounded-2xl rounded-br-none'],
            foreign: ['bg-white rounded-2xl rounded-bl-none']
        },
        category:{
            default:['flex-row items-end'],
            voice:['flex-col items-end']
        }
    },
    defaultVariants:{type:'mine',category:'default'}
})

const cvaStatusIcon = cva(['w-5 aspect-square stroke-cGreenAccent'])

const cvaMessageTimeBlock = cva(['flex items-center -mb-1.5 gap-0.5'])

const cvaMessageTimeTitle = cva(['text-xs font-sf'], {
    variants: {
        type: {
            mine: ['text-cGreenAccent'],
            foreign: ['text-cGray']
        },
    }
})
const cvaMessageBodyBlock = cva(['whitespace-pre-wrap break-all', 'leading-[120%]'])
const cvaTail = cva(['self-end absolute w-3'], {
    variants: {
        type: {
            mine: ['right-0.5 fill-cGreen scale-x-[-1]'],
            foreign: ['left-0.5 fill-white']
        }

    }
})

const animateForeignMessageVariants={
    hidden:{y:'50%',opacity:0},
    visible:{y:0,opacity: 1}
}
const Message: FC<MessageProps> = ({children, type, status, time, hideTail,category,author}) => {
    return (
        <motion.div variants={animateForeignMessageVariants} initial={'hidden'} transition={{duration:0.2,ease:'easeInOut'}} animate={'visible'} className={cvaMessageContainer({type: type})}>
            {!hideTail && <Tail className={cvaTail({type: type})}/>}
            <div className={cvaMessage({
                type: type, category: category
            })}>
                <div className={cvaMessageBodyBlock()}>{children}</div>
                <div className={cvaMessageTimeBlock()}>
                    <p className={cvaMessageTimeTitle({type: type})}>{format(time, 'hh:mm')}</p>
                    {type == 'mine' && (status == 'send' ? <SendIcon className={cvaStatusIcon()}/> :
                        <AcceptedIcon className={cvaStatusIcon()}/>)}
                </div>
            </div>

        </motion.div>
    );
};

export default Message;