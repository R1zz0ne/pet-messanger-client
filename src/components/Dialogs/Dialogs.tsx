import { useEffect, useState } from "react";
import DialogItem from "./DialogItem/DialogItem";
import DialogSearch from "./DialogSearch/DialogSearch";
import styles from "./Dialogs.module.css"
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IDialogs } from "../../models/store/IDialogs";
import { getDialogsEmit, getUsersEmit } from "../../http/socket";
import { IDialogsProps } from "../../models/UIprops/IDialogs";
import { IUsers } from "../../models/store/IUsers";
import { IDialogsResponse } from "../../models/sockets/ISockets";

const Dialogs: React.FC<IDialogsProps> = ({ setIsMenu, setIsDialog, isDialog,
    searchUsers }) => {
    const dialogs: IDialogsResponse[] = useTypedSelector(state => state.DialogSlice).dialogs;
    const [filterDialogs, setFilterDialogs] = useState<IDialogs[]>([]);
    const [filterUsers, setFilterUsers] = useState<IUsers[]>([]);
    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        /*Выполняется проверка заполнено ли текстовое поле для поиска и фильтрации диалогов/пользователей:
        - Если заполнено, то фильтруем массив далогов и проверяем, что массив пользователей не пустой:
            - Если массив пользователей не пустой, то формируем массив пользователей без пользователей из существующих диалогов и устанавливаем отфильтрованные диалоги и пользователей в локальные стейты
            - Иначе устанавливаем в локальный стейт отфильтрованный список диалогов и пустой массив отфильтрованный пользователей
        - Иначе в локальный стейт устанавливаем пустой массив отфильтрованных пользователей и не отфильтрованный массив диалогов
        */
        if (searchValue.trim().length > 0) {
            const dialogsFilt = dialogs.filter(el => el.email.toLowerCase().includes(searchValue.toLowerCase()));
            if (searchUsers.length > 0) {
                const usersFilt = searchUsers.filter(el => !dialogs.some(el2 => el2.userid === el.id));
                setFilterUsers(usersFilt);
                setFilterDialogs(dialogsFilt);
            } else {
                setFilterUsers([]);
                setFilterDialogs(dialogsFilt);
            }
        } else {
            setFilterUsers([]);
            setFilterDialogs(dialogs);
        }
    }, [searchUsers, dialogs, searchValue])
    useEffect(() => { //отправка запроса на сервер для поиска юзера, если изменился локальный стейт поля поиска
        if (searchValue.trim().length > 0) {
            getUsersEmit(searchValue);
        }
    }, [searchValue])
    useEffect(() => { //получение списка диалогов при инициализации формы
        getDialogsEmit();
    }, [])

    return (
        <div className={styles.dialogs}>
            <DialogSearch setIsMenu={setIsMenu} setSearchValue={setSearchValue} />
            {filterDialogs.map(el => <DialogItem name={el.email}
                id={el.id}
                key={el.id}
                setIsDialog={setIsDialog}
                isDialog={isDialog}
                userid={el.userid} />)}
            {filterUsers && filterUsers.length > 0
                ? <div style={{ borderBottom: '1px gray solid' }}></div>
                : ''}
            {filterUsers && filterUsers.length > 0
                ? filterUsers.map(el => <DialogItem name={el.email}
                    id={0}
                    key={el.id}
                    isDialog={isDialog}
                    setIsDialog={setIsDialog}
                    userid={el.id} />)
                : ''}
        </div>
    )
}

export default Dialogs;