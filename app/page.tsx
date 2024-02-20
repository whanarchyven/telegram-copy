"use client"

import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function Home() {

    const router=useRouter()

    useEffect(()=>{
        router.push('/chats')
    })
    return (
        <main className={'w-full h-full flex items-center justify-center'}>
            <div>

            </div>
        </main>
    );
}