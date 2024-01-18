import { Message } from "../../models/response/DialogResponse";
import { IDialogs } from "../../models/store/Dialogs";
import styles from "./Messages.module.css";
import MessagesBody from "./MessagesBody/MessagesBody";
import MessagesHeader from "./MessagesHeader/MessagesHeader";
import MessagesSend from "./MessagesSend/MessagesSend";

interface MessagesProps {
    dialog: IDialogs | undefined
}

const Messages: React.FC<MessagesProps> = ({ dialog }) => {
    const dialogName: string = dialog ? dialog.email : ''; //Если dialog существует, то берем его email, иначе возвращаем пустую строку
    const dialogMessage: Message[] = dialog && dialog.messages ? dialog.messages : []; //Если диалог существует и у него есть атрибут messages, то возвращаем массив messages, иначе возвращаем пустой массив
    const dialogId: number = dialog ? dialog.id : -1; //Если диалог существует, то возвращаем id диалога, иначе отрицательное значение
    const dialogUserId: number = dialog ? dialog.userid : -1; //Если диалог существует, то возвращаем id пользователя, иначе отрицательное значение

    return (
        <div className={styles.messages}>
            <MessagesHeader dialogName={dialogName} />
            <MessagesBody messages={dialogMessage} />
            <MessagesSend id={dialogId} userid={dialogUserId} />
        </div>
    )
}

export default Messages;