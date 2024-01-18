import { useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Navigate } from "react-router-dom";
import styles from "./MainForm.module.css"
import Menu from "../Menu/Menu";
import Messages from "../Messages/Messages";
import Dialogs, { Users } from "../Dialogs/Dialogs";
import UserService from "../../services/UserService";

export const AppForm: React.FC = () => {
    const { checkAuth, logout } = useActions();
    const { isAuth, user, isLoading } = useTypedSelector(state => state.AuthSlice);
    const { dialogs } = useTypedSelector(state => state.DialogSlice);
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const [isDialog, setIsDialog] = useState<string>('');
    const [searchUsers, setSearchUsers] = useState<Users[]>([]);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth(null);
        }
    }, [])

    const fetchUsers = async (value: string) => {
        const users = await UserService.getUsers(value);
        setSearchUsers(users.data);
    }

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
            const user: Users = searchUsers.find(el => el.id === idValue)!;
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
                searchUsers={searchUsers}
                fetchUsers={fetchUsers} />
            <Messages dialog={pickedDialog()} />
        </div>
    )
}