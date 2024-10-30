"use client"
import {Inter} from "next/font/google";
import ReduxProvide from "@/app/store/ReduxProvider";
import TopMenu from "@/app/ui/top-menu";
import Navbar from "@/app/ui/navbar";
import {useWindowSize} from "react-use";
import {usePathname} from "next/navigation";
import ChatsList from "@/app/widgets/ChatsList";

const inter = Inter({subsets: ["latin"]});


export default function ChatsLayout({
                                        children,
                                    }: Readonly<{
    children: React.ReactNode;
}>) {

    const width = useWindowSize().width
    const pathname=usePathname()

    return (
        <>
            {width>=1024||pathname=='/chats'?<Navbar/>:null}
            {pathname=='/chats' ? <TopMenu/> : null}
            <div className={'flex w-full items-center'}>
                {width>=1024||pathname=='/chats'?<div className={'w-full lg:w-96 custom-scroll lg:max-h-screen lg:overflow-y-scroll'}>
                    <ChatsList />
                </div>:null}
                {children}
            </div>
        </>
    );
}
