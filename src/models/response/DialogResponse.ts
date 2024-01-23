export interface DialogsResponse {
    id: number,
    userid: number,
    email: string
}

export interface Message {
    id: number,
    userid: number,
    email: string,
    message: string
}

export interface setDialogResponse {
    id: number
}