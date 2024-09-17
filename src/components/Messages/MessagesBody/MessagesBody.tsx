import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { IMessagesBodyProps } from "../../../models/UIprops/IMessages";
import MessagesItem from "./MessageItem/MessageItem";
import styles from "./MessagesBody.module.css"

const MessagesBody: React.FC<IMessagesBodyProps> = ({ messages }) => {
    const { user } = useTypedSelector(state => state.AuthSlice);

    const messageItems: JSX.Element[] = messages.map((el) => <MessagesItem key={el.id} item={el} isMyMess={user.id === el.userid} />);

    return (
        <div className={styles.message_body}>
            {messageItems}
        </div>
    )
}

export default MessagesBody;