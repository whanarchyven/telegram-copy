import axios from "axios";

export const getDialogues=async ()=>{
    const dialogues=await axios.get('/api/get-chats')
    return dialogues
}