import {  NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    const result = await axios.get(
        `https://functions.yandexcloud.net/d4egf05tng33jl7t8c5d?space=admin&method=get_chats&limit=50&offset=0`
    );
    // console.log(result.data, `${process.env.BACKEND_URL}/getArticle/`);
    return NextResponse.json(result.data);
}
export const dynamic = 'force-dynamic';
