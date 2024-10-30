import React from 'react';
import ChatsList from "@/app/widgets/ChatsList";

const Page = () => {
    return (
        <div className={'hidden lg:flex items-center relative w-full h-full justify-center '}>
            <img src={'/images/bg_overlay_desktop.png'}
                 className={'h-screen hidden lg:flex w-full object-cover absolute left-0 top-0'}/>
            <div
                className={'flex absolute z-20 bg-black bg-opacity-10 px-3 rounded-full text-sm text-white font-normal items-center justify-center'}>
                Select a chat to start messaging
            </div>
        </div>
    );
};

export default Page;