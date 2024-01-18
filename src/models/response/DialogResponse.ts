export interface DialogsResponse {
    id: number,
    userid: number,
    email: string
}

export interface Message {
    userid: number,
    email: string,
    message: string
}

export interface setDialogResponse {
    id: number
}