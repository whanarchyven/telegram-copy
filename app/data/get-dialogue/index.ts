import axios from "axios";

export const getDialogue=async (chatId:string)=>{
    const messages=await axios.get(`/api/get-chat?user_id=${chatId}`)
    return messages
}