"use client"
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import TextareaAutosize from 'react-textarea-autosize';
import {useState} from "react";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    const [message, setMessage] = useState('')

    return (
        <html lang="en">
        <body className={inter.className}>
        <div
            className={'h-[3.5rem] fixed top-0 z-50 w-full flex pb-1 px-2 justify-between items-center shadow-sm pt-3.5 bg-white bg-opacity-80 backdrop-blur-3xl'}>
            <div className={'flex gap-1 items-center'}>
                <img className={'w-3'} src={'/images/arow_back.svg'}/>
                <div
                    className={'px-1.5 font-sf text-sm text-white flex items-center rounded-full justify-center bg-cBlue'}>
                    2152
                </div>
            </div>
            <div className={'flex flex-col items-center'}>
                <div className={'flex gap-1 items-center'}>
                    <p className={'font-sf text-lg font-[500] tracking-wide leading-[100%]'}>Nick Erlan</p>
                    <img className={'w-4'} src={'/images/premium.svg'}/>
                </div>
                <p className={'font-sf text-cGray leading-[100%] text-sm'}>был(а) недавно</p>
            </div>
            <img className={'w-10'} src={'/images/avatar_temp.png'}/>
        </div>
        {children}
        <div
            className={'fixed w-full bottom-0 bg-white bg-opacity-80 flex flex-col items-center justify-start pt-2 pb-[3.3rem] backdrop-blur-3xl h-fit'}>
            <div className={'flex w-full items-end gap-3 px-3'}>
                <img className={'w-[1.3rem] pb-1'} src={'/images/scrap.svg'}/>
                <div className={'bg-white flex items-end px-3 pr-2 gap-1 w-full rounded-2xl py-[0.1rem]'}>
                    <TextareaAutosize onChange={(event: any) => {
                        setMessage(event.target.value)
                    }} className={'text-lg w-full hover:outline-0 font-sf'} placeholder={'Сообщение'} maxRows={12}/>
                    {message.length > 0 ? <img className={'w-[1.3rem] pb-1'} src={'/images/emoji.svg'}/> :
                        <img className={'w-[1.3rem] pb-1'} src={'/images/stickers.svg'}/>}
                </div>
                {message.length > 0 ?
                    <div className={'w-[28px] aspect-square h-[28px] p-1.5 flex items-center justify-center rounded-full bg-cBlue'}>
                        <img className={'h-full'} src={'/images/send_message.svg'}/>
                    </div> : <img className={'h-[28px] pb-1'} src={'/images/micro.svg'}/>}
            </div>
            <div className={'absolute w-1/3 bg-cGray h-1 rounded-full bottom-5'}>

            </div>
        </div>
        </body>
        </html>
    );
}
