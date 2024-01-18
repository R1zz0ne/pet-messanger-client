import { useState } from "react";
import { useActions } from "../../../hooks/useActions";
import styles from "../Authorization.module.css"
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";

export const RegistrationForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const { registration } = useActions()

    return (
        <div className={styles.main}>
            <div className={styles.form}>
                <h1>Регистрация</h1>
                <Input
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Почта"
                    type="text"
                    value={email}
                />
                <Input
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Пароль"
                    type="text"
                    value={password}
                />
                <Button onClick={() => registration({ email, password })}>Зарегистрироваться</Button>
            </div>
        </div>
    )
}