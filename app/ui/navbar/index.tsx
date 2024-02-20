"use client"
import {FC} from 'react';
import ContactsIcon from "@/public/images/icons/navbar/contacts.svg";
import ContactsIconActive from "@/public/images/icons/navbar/contacts_active.svg";
import CallIcon from "@/public/images/icons/navbar/call.svg";
import CallIconActive from "@/public/images/icons/navbar/calls_active.svg";
import ChatsIcon from "@/public/images/icons/navbar/chats.svg";
import ChatsIconActive from "@/public/images/icons/navbar/chats_active.svg";
import SettingsIcon from "@/public/images/icons/navbar/settings.svg";
import SettingsIconActive from "@/public/images/icons/navbar/settings_active.svg";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {cva} from "class-variance-authority";
import Link from "next/link";

const cvaNavbarLabel = cva(['text-xs font-sf'], {
    variants: {
        isActive: {
            true: 'text-cBlue',
            false: 'text-cGray'
        }
    }
})

const Navbar: FC = () => {
    const link = usePathname()
    console.log(link)
    return (
        <div
            className={'fixed left-0 bottom-0 bg-white bg-opacity-90 w-full p-3 pb-10 backdrop-blur-xl grid grid-cols-4 items-center gap-7'}>
            <Link href={'/contacts'} className={'flex flex-col gap-1 items-center'}>
                {link.includes('/contacts') ? <ContactsIconActive className={'w-6'}/> :
                    <ContactsIcon className={'w-6'}/>}
                <p className={cvaNavbarLabel({isActive: link.includes('/contacts')})}>Контакты</p>
            </Link>
            <Link href={'/calls'} className={'flex flex-col gap-1 items-center'}>
                {link.includes('/calls') ? <CallIconActive className={'w-6'}/> : <CallIcon className={'w-6'}/>}
                <p className={cvaNavbarLabel({isActive: link.includes('/calls')})}>Звонки</p>
            </Link>
            <Link href={'/chats'} className={'flex flex-col gap-1 items-center'}>
                {link.includes('/chats') ? <ChatsIconActive className={'w-7'}/> : <ChatsIcon className={'w-7'}/>}
                <p className={cvaNavbarLabel({isActive: link.includes('/chats')})}>Чаты</p>
            </Link>
            <Link href={'/settings'} className={'flex flex-col gap-1 items-center'}>
                {link.includes('/settings') ? <SettingsIconActive className={'w-7'}/> :
                    <SettingsIcon className={'w-7'}/>}
                <p className={cvaNavbarLabel({isActive: link.includes('/settings')})}>Настройки</p>
            </Link>
        </div>
    );
};

export default Navbar;