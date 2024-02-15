import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {MessageProps} from "@/app/components/messages/message-components/message";
import {VoiceMessageProps} from "@/app/components/messages/message-components/voice";

export interface IMessagesSliceState {
  messages: Array<MessageProps|VoiceMessageProps>;
}

const initialState: IMessagesSliceState = {
  messages: [],
};

const MessagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<{ message:string,time:string }>) => {
      state.messages.push({children:action.payload.message,category:'default',author:'wh',status:'accepted',time:action.payload.time,type:'mine'});
    },
    requestMessage: (state, action: PayloadAction<{duration:number,time:string}>) => {
      state.messages.push({children:'action.payload.message',category:'voice',author:'wh',status:'accepted',time:action.payload.time,type:'foreign',duration:action.payload.duration});
    }
  },
});

export const messagesActions = MessagesSlice.actions;

export const messagesSelectors = {
  messages: (state: RootState) => state.message,
};

export default MessagesSlice.reducer;
