import { useState } from "react";
import styles from "../Authorization.module.css"
import { Input } from "../../UI/Input/Input";
import { Button } from "../../UI/Button/Button";
import { registrationEmit } from "../../../http/socket";

export const RegistrationForm: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

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
                <Button onClick={() => registrationEmit(email, password)}>Зарегистрироваться</Button>
            </div>
        </div>
    )
}