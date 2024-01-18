import { AxiosResponse } from "axios";
import $api from "../http";
import { DialogsResponse, Message, setDialogResponse } from "../models/response/DialogResponse";


export default class DialogService {
    static async getDialogs(): Promise<AxiosResponse<DialogsResponse[]>> {
        return $api.get<DialogsResponse[]>('/dialogs');
    }
    static async setDialog(userid: number): Promise<AxiosResponse<setDialogResponse>> {
        return $api.post<setDialogResponse>('/dialogs', { userid });
    }
    static async getMessages(id: number): Promise<AxiosResponse<Message[]>> {
        return $api.get<Message[]>(`/dialogs/${id}/messages`);
    }
    static async setMessages(id: Number, message: string): Promise<AxiosResponse> {
        return $api.post(`dialogs/${id}/messages`, { message })
    }
}