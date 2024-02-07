import { IDialogsResponse, IMessage } from "../sockets/ISockets"

export interface IDialogsSlice {
    dialogs: IDialogs[]
}

export interface IDialogs extends IDialogsResponse {
    messages?: IMessage[]
}