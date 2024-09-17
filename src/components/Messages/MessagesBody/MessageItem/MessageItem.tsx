import { IMessagesItemProps } from "../../../../models/UIprops/IMessages";
import styles from "./MessageItem.module.css"

const MessagesItem: React.FC<IMessagesItemProps> = ({ item, isMyMess }) => {
    return (
        <div className={isMyMess ? styles.message_me : styles.message_comp}>
            <div>{item.email}</div>
            <div>{item.message}</div>
        </div>
    )
}

export default MessagesItem;