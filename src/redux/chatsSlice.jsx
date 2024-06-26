import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const chatsSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            state.messages.splice(LIVE_CHAT_COUNT, 1)
            state.messages.push(action.payload);
        },
    },
});

export const { addMessage } = chatsSlice.actions;

export default chatsSlice.reducer;