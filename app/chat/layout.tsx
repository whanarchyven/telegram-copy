import Header from "@/app/chat/ui/header";
import MessageContainer from "@/app/chat/ui/message-container";
import {Suspense} from "react";

export default function ChatLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className={'flex flex-col h-screen'}>
            <Suspense>
                <Header/>
            </Suspense>
            {children}
            <MessageContainer/>
        </div>
    );
}
