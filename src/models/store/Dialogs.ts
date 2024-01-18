import { DialogsResponse } from './../response/DialogResponse';
import { Message } from "../response/DialogResponse";

export interface IDialogsSlice {
    dialogs: IDialogs[]
}

export interface IDialogs extends DialogsResponse {
    messages?: Message[]
}

export interface IDialogsPayloadActions {
    messages: Message[],
    id: number
}