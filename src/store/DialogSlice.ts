import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { DialogsResponse } from "../models/response/DialogResponse"
import { getDialogs } from "./thunk/getDialogsAsyncThunk"
import { IDialogsPayloadActions, IDialogsSlice } from "../models/store/Dialogs"
import { getMessages } from "./thunk/getMessagesAsyncThunk"

const initialState: IDialogsSlice = {
    dialogs: []
}

export const dialogsSlice = createSlice({
    name: 'dialogsSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // .addCase(getDialogs.pending, (state) => {

            // })
            .addCase(getDialogs.fulfilled, (state, action: PayloadAction<DialogsResponse[]>) => {
                state.dialogs = action.payload;
            })
            .addCase(getDialogs.rejected, (state, action: PayloadAction<any>) => {
                alert(action.payload);
            })
            // .addCase(getMessages.pending, (state) => {

            // })
            .addCase(getMessages.fulfilled, (state, action: PayloadAction<IDialogsPayloadActions>) => {
                for (const [index, value] of state.dialogs.entries()) {
                    if (value.id === action.payload.id) {
                        state.dialogs[index].messages = action.payload.messages;
                        break;
                    }
                }
            })
    }
})

export default dialogsSlice.reducer;