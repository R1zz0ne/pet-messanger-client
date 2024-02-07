import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import styles from "../Authorization.module.css"
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import { loginEmit } from "../../../http/socket";

const LoginForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const navigate = useNavigate();
    const { isAuth } = useTypedSelector(state => state.AuthSlice);

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth])

    const handleAuth = () => {
        loginEmit(email, password)
    }

    return (
        <div className={styles.main}>
            <div className={styles.form}>
                <h1>Авторизация</h1>
                <Input
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    type="text"
                    placeholder="Почта" />
                <Input
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="text"
                    placeholder="Пароль" />
                <Button onClick={() => handleAuth()}>
                    Логин
                </Button>
                <Button onClick={() => navigate("/registration")}>
                    Регистрация
                </Button>
            </div>
        </div>
    )
}

export default LoginForm;