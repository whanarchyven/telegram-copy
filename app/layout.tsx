import {Inter} from "next/font/google";
import "./globals.css";
import ReduxProvide from "@/app/store/ReduxProvider";
import EditIcon from "@/public/images/icons/navbar/edit.svg"
import PlusIcon from "@/public/images/icons/navbar/plus.svg"
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
            <body className={'relative block lg:flex lg:flex-row'}>
            {children}
            </body>
        </ReduxProvide>
        </html>
    );
}
