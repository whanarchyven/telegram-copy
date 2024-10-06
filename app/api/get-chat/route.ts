import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
    const url = new URL(request.url);
    const user_id = url.searchParams.get('user_id');

    const result = await axios.get(
        `https://functions.yandexcloud.net/d4egf05tng33jl7t8c5d?space=admin&method=get_chat_messages&limit=200&offset=1&user_id=${user_id}`
    );
    // console.log(result.data, `${process.env.BACKEND_URL}/getArticle/`);
    return NextResponse.json(result.data);
}
export const dynamic = 'force-dynamic';
