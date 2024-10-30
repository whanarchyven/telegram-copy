"use client"
import {FC} from 'react';
import ContactsIcon from "@/public/images/icons/navbar/contacts.svg";
import CallIcon from "@/public/images/icons/navbar/call.svg";
import ChatsIcon from "@/public/images/icons/navbar/chats.svg";
import SettingsIcon from "@/public/images/icons/navbar/settings.svg";
import ParamsIcon from "@/public/images/icons/navbar/params.svg";
import BurgerIcon from "@/public/images/icons/navbar/burger.svg";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {cva} from "class-variance-authority";
import Link from "next/link";
import clsx from "clsx";
import {useWindowSize} from "react-use";

const cvaNavbarLabel = cva(['text-xs font-sf'], {
    variants: {
        isActive: {
            true: 'text-cBlue',
            false: 'text-cGray',
        }
    }
})

const cvaNavbarDesktopLabel = cva(['text-xs font-sf'], {
    variants: {
        isActive: {
            true: 'text-cLightBlue',
            false: 'text-cGray',
        }
    }
})


const cvaNavbarLink = cva([
    'w-6'
], {variants: {isActive: {true: 'fill-cBlue', false: 'fill-cGrayIcon'}}})
const cvaNavbarDesktopLink = cva([
    'w-6'
], {variants: {isActive: {true: 'fill-cLightBlue', false: 'fill-cGrayIcon'}}})


const Navbar: FC = () => {
    const currentLink = usePathname()
    const width = useWindowSize().width

    const links = [{
        link: '/contacts',
        icon: <ContactsIcon className={cvaNavbarLink()}/>,
        iconActive: <ContactsIcon className={cvaNavbarLink({isActive: true})}/>,
        label: 'Контакты'
    },
        {
            link: '/calls',
            icon: <CallIcon className={cvaNavbarLink()}/>,
            iconActive: <CallIcon className={cvaNavbarLink({isActive: true})}/>,
            label: 'Звонки'
        },
        {
            link: '/chats',
            icon: <ChatsIcon className={cvaNavbarLink()}/>,
            iconActive: <ChatsIcon className={cvaNavbarLink({isActive: true})}/>,
            label: 'Чаты'
        }
        , {
            link: '/settings',
            icon: <SettingsIcon className={cvaNavbarLink()}/>,
            iconActive: <SettingsIcon className={cvaNavbarLink({isActive: true})}/>,
            label: 'Настройки'
        }]

    const desktopLinks = [
        {
            link: '/chats',
            icon: <ChatsIcon className={cvaNavbarDesktopLink()}/>,
            iconActive: <ChatsIcon className={cvaNavbarDesktopLink({isActive: true})}/>,
            label: 'Чаты'
        },
        {
            link: '/params',
            icon: <ParamsIcon className={cvaNavbarDesktopLink()}/>,
            iconActive: <ParamsIcon className={cvaNavbarDesktopLink({isActive: true})}/>,
            label: 'Настройки'
        }
    ]


    const links_mobile = []

    return (
        <div
            className={'fixed lg:relative left-0 bottom-0 lg:bg-[#293A4C] bg-white bg-opacity-90 w-full lg:w-20 p-3 lg:px-0 pb-10 backdrop-blur-xl grid grid-cols-4 lg:flex lg:flex-col z-[9999] items-center lg:gap-0 gap-7 lg:min-h-screen'}>
            {width > 1024 ?
                <>
                    {desktopLinks.map((link, counter) => {
                        const isActive = currentLink.includes(link.link)
                        return (
                            <Link key={counter} href={link.link}
                                  className={clsx('flex flex-col lg:w-full lg:p-3 gap-1 items-center', isActive ? 'lg:bg-cDarkBlue' : '')}>
                                {isActive ? link.iconActive : link.icon}
                                <p className={cvaNavbarDesktopLabel({isActive: isActive})}>{link.label}</p>
                            </Link>

                        )
                    })}
                </> :
                <>
                    {links.map((link, counter) => {
                        const isActive = currentLink.includes(link.link)
                        return (
                            <Link key={counter} href={link.link}
                                  className={clsx('flex flex-col lg:w-full lg:p-3 gap-1 items-center', isActive ? 'lg:bg-cDarkBlue' : '')}>
                                {isActive ? link.iconActive : link.icon}
                                <p className={cvaNavbarLabel({isActive: isActive})}>{link.label}</p>
                            </Link>

                        )
                    })}
                </>}
        </div>
    );
};

export default Navbar;