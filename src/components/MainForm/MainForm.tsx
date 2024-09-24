import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Navigate } from "react-router-dom";
import styles from "./MainForm.module.css"
import Menu from "../Menu/Menu";
import Messages from "../Messages/Messages";
import Dialogs from "../Dialogs/Dialogs";
import { checkAuthEmit } from "../../http/socket";
import { IUsers } from "../../models/store/IUsers";

export const MainForm: React.FC = () => {
    const { isAuth } = useTypedSelector(state => state.AuthSlice);
    const { dialogs } = useTypedSelector(state => state.DialogSlice);
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const [isDialog, setIsDialog] = useState<string>('');
    const { users } = useTypedSelector(state => state.UsersSlice);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuthEmit();
        }
    }, [])
    useEffect(() => {
        if (isDialog.startsWith('user.')) {
            const idValue: number = +isDialog.split('.')[1];
            const dialog = dialogs.find(el => el.userid === idValue);
            if (dialog) { setIsDialog(`dialog.${dialog.id}`) }
        }
    }, [dialogs])

    if (!isAuth) {
        return <Navigate to="/authorization" />
    }

    const pickedDialog = () => {
        /*Функция выполняет проверку что выбран диалог из списка диалогов:
        - Если условие проходит, то выполняется поиск диалога среди массива диалогов
        - Иначе выполняется поиск выбранного диалога среди массива найденных пользователей:
            - Если в массиве пользователей найден пользователь по id, то формируется объект с нулевым id диалога и почтой и id пользователя
            - Иначе формируется объект с отрицательными id диалога, id пользователя и пустой почтой*/
        const idValue: number = +isDialog.split('.')[1];
        if (isDialog.startsWith('dialog.')) {
            const dialog = dialogs.find(el => el.id === idValue)!;
            return dialog
        } else {
            const user: IUsers = users.find(el => el.id === idValue)!;
            return user
                ? { id: 0, email: user.email, userid: user.id }
                : { id: -1, email: '', userid: -1 };
        }
    }

    return (
        <div className={styles.main}>
            <Menu isMenu={isMenu} setIsMenu={setIsMenu} />
            <Dialogs setIsMenu={setIsMenu}
                setIsDialog={setIsDialog}
                isDialog={isDialog}
                searchUsers={users} />
            <Messages dialog={pickedDialog()} />
        </div>
    )
}