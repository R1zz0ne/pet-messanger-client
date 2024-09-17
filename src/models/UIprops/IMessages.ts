import { IMessage } from "../sockets/ISockets";
import { IDialogs } from "../store/IDialogs";

export interface IMessagesItemProps {
    item: IMessage,
    isMyMess: boolean
}

export interface IMessagesBodyProps {
    messages: IMessage[]
}

export interface IMessagesHeaderProps {
    dialogName: string
}

export interface IMessagesSendProps {
    id: number,
    userid: number
}

export interface IMessagesProps {
    dialog: IDialogs | undefined
}