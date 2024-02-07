import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IDialogsSlice } from "../../models/store/IDialogs"
import { IDialogsResponse, IMessage } from "../../models/sockets/ISockets";

const initialState: IDialogsSlice = {
    dialogs: [],
}

export const dialogsSlice = createSlice({
    name: 'dialogsSlice',
    initialState,
    reducers: {
        getDialogsAC: (state, action: PayloadAction<IDialogsResponse[]>) => {
            state.dialogs = action.payload;
        },
        getMessagesAC: (state, action: PayloadAction<IMessage[]>) => {
            for (const [index, value] of state.dialogs.entries()) {
                for (const [indexMes, valueMes] of action.payload.entries()) {
                    if (value.id === valueMes.dialogid) {
                        if (state.dialogs[index].messages) {
                            state.dialogs[index].messages?.push(action.payload[indexMes])
                        } else {
                            state.dialogs[index].messages = []
                            state.dialogs[index].messages?.push(action.payload[indexMes])
                        }
                    }
                }
            }
        },
        setDialogAC: (state, action: PayloadAction<IDialogsResponse>) => {
            state.dialogs.push(action.payload);
        },
        setMessageAC: (state, action: PayloadAction<IMessage>) => {
            for (const [index, value] of state.dialogs.entries()) {
                if (value.id === action.payload.dialogid) {
                    if (state.dialogs[index].messages) {
                        state.dialogs[index].messages?.push(action.payload)
                    } else {
                        state.dialogs[index].messages = []
                        state.dialogs[index].messages?.push(action.payload)
                    }
                }
            }
        }
    },
})

export default dialogsSlice.reducer;