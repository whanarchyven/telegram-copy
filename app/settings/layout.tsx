import {Inter} from "next/font/google";
import ReduxProvide from "@/app/store/ReduxProvider";
import TopMenu from "@/app/ui/top-menu";
import Navbar from "@/app/ui/navbar";

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
            <body className={'relative flex-col'}>
            <TopMenu/>
            {children}
            <Navbar/>
            </body>
        </ReduxProvide>
        </html>
    );
}
