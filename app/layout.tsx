import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";
import ReduxProvide from "@/app/store/ReduxProvider";
import MessageContainer from "@/app/components/message-container";
import {Suspense} from "react";

const inter = Inter({subsets: ["latin"]});


export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <head>
            <title>Telegram</title>
            <link rel={'manifest'} href={'/manifest.json'}/>
        </head>
        <ReduxProvide>
            <body className={'flex flex-col h-screen'}>
            <Suspense>
                <Header/>
            </Suspense>
            {children}
            <MessageContainer/>
            </body>
        </ReduxProvide>
        </html>
    );
}
