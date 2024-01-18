import { useActions } from "../../../hooks/useActions"
import styles from "./DialogItem.module.css"

interface DialogItemProps {
    name: string,
    id: number,
    userid: number,
    isDialog: string,
    setIsDialog: React.Dispatch<React.SetStateAction<string>>,
}

const DialogItem: React.FC<DialogItemProps> = ({ name, id, isDialog, setIsDialog, userid }) => {
    const { getMessages } = useActions();

    const clickHandler = () => {
        /*Выполняется проверка id диалога, чтобы определить выбран существующий диалог или выбран пользователь из результатов поиска.
        Исходя из результата выполняется запись в локальный стейт по выбранному диалогу в родительский компонент и если диалог существует,
        то выполняется запрос на сервер для получения массива сообщений*/
        if (id > 0) {
            setIsDialog(`dialog.${id}`);
            getMessages(id);
        } else {
            setIsDialog(`user.${userid}`);
        }
    }

    const checkActive = () => {
        /*Функция выполняет проверку выбран ли текущий элемент списка диалогов/пользователей:
        - Сначала выполняется проверка является ли выбранный элемент диалогом и соответствует ли id диалога текущего элемента записанному в isDialog
        - Если первое условие не прошло, то выполняется проверка является ли выбранный элемент пользователем и соответствует ли id текущего элемента 
        записанному в isDialog
        - Если второе условие также не пройдено, то текущий элемент считается не выбранным
        В результате функция возвращает один из 2х стилей: для активного или не активного элемента*/
        const idValue: number = +isDialog.split('.')[1];
        if (isDialog.startsWith('dialog.') && idValue === id) {
            return styles.dialogItemAct
        } else if (isDialog.startsWith('user.') && idValue === userid) {
            return styles.dialogItemAct
        } else {
            return styles.dialogItem
        }
    }

    return (
        <div className={checkActive()}
            onClick={() => { clickHandler() }}>{name}</div>
    )
}

export default DialogItem;