import { useEffect, useState } from "react";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import styles from "./MessagesSend.module.css"
import DialogService from "../../../services/DialogsService";

interface MessagesSendProps {
    id: number,
    userid: number
}

const MessagesSend: React.FC<MessagesSendProps> = ({ id, userid }) => {
    const [message, setMessage] = useState<string>('');

    const setMessageFunction = async (id: number, message: string) => {
        /*Функция, в которой выполняется отправка сообщения и проверка успешности его доставки*/
        const response = await DialogService.setMessages(id, message);
        if (response.status === 200) {
            setMessage('');
        } else {
            throw new Error();
        }
    }

    const onSubmit = async () => {
        /*Функция нажатия кнопки отправки сообщения:
        - Выполняется проверка, что поле ввода сообщения заполнено и и не содержит только сомволов пробела:
            - Выполняется проверка что id диалога больше 0, что свидетельствует о том, что диалог уже ранее велся и есть
            диалог, к которому стоит привязать сообщение
            - Выполняется проверка что id диалога равен 0, что свидетельствует о том, что выполняется попытка отправки 
            сообщения пользователю, с которым диалог раньше не велся и будет выполнено сначала создание диалога, со связями
            с пользователями, а затем отправка сообщения
            - Если id диалога отрицательный, то как заглушка в лог будет добавлено сообщение, что диалог не выбран
        - Если поле ввода сообщения не заполнено или заполнено только символами пробела, то как заглушка в лог добавится
        сообщение, что поле не заполнено*/
        if (message && message.trim().length > 0) {
            if (id > 0) {
                try {
                    await setMessageFunction(id, message);
                } catch (error) {
                    console.log('Произошла ошибка при отправке сообщения'); //TODO: избавиться от заглушки
                }
            } else if (id === 0) {
                try {
                    const responseDialog = await DialogService.setDialog(userid);
                    console.log(responseDialog);

                    await setMessageFunction(responseDialog.data.id, message);
                } catch (error) {
                    console.log('Произошла ошибка при отправке сообщения'); //TODO: избавиться от заглушки
                }
            } else {
                console.log('Не выбран диалог'); //TODO: избавиться от заглушки
            }

        } else {
            console.log('Не заполнено поле "Сообщение"'); //TODO: избавиться от заглушки
        }
    }

    return (
        <div className={styles.message_send}>
            <Input placeholder="Enter your message..." onChange={(e) => setMessage(e.target.value)} value={message} />
            <Button onClick={() => onSubmit()}>Send</Button>
        </div>
    )
}

export default MessagesSend;