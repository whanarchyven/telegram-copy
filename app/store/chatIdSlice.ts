import { RootState } from './store';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IChatIdSliceState {
  chatId:string,
  status:'offline'|'online'|'typing'
}

const initialState: IChatIdSliceState = {
  chatId: 'new_client_registration',
  status:'offline'
};

const ChatIdSlice = createSlice({
  name: 'chatId',
  initialState,
  reducers: {
    setChatId: (state, action: PayloadAction<{chatId:string}>) => {
      state.chatId=action.payload.chatId;
    },
    setStatus:(state, action: PayloadAction<{status:'offline'|'online'|'typing'}>) => {
      state.status=action.payload.status;
    }
  },
});

export const chatIdActions = ChatIdSlice.actions;

export const chatIdSelectors = {
  chatId: (state: RootState) => state.chatId,
  status:(state:RootState)=>state.chatId
};

export default ChatIdSlice.reducer;
