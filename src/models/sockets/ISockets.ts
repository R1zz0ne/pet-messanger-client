import { IUserDTO } from "../store/IUsers";

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: IUserDTO;
}

export interface IDialogsResponse {
    id: number,
    userid: number,
    email: string
}

export interface IMessage {
    dialogid: number
    id: number,
    userid: number,
    email: string,
    message: string
}