import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Message } from "../../../models/response/DialogResponse";
import MessagesItem from "./MessageItem/MessageItem";
import styles from "./MessagesBody.module.css"

interface MessagesBodyProps {
    messages: Message[]
}

const MessagesBody: React.FC<MessagesBodyProps> = ({ messages }) => {
    const { user } = useTypedSelector(state => state.AuthSlice);

    const messageItems: JSX.Element[] = messages.map((el) => <MessagesItem key={el.id} item={el} isMyMess={user.id === el.userid} />);

    return (
        <div className={styles.message_body}>
            {messageItems}
        </div>
    )
}

export default MessagesBody;