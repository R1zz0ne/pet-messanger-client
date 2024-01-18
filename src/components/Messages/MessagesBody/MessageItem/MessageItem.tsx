import { Message } from "../../../../models/response/DialogResponse";
import styles from "./MessageItem.module.css"

interface MessagesItemProps {
    item: Message,
    isMyMess: boolean
}

const MessagesItem: React.FC<MessagesItemProps> = ({ item, isMyMess }) => {
    return (
        <div className={isMyMess ? styles.message_me : styles.message_comp}>
            <div>{item.email}</div>
            <div>{item.message}</div>
        </div>
    )
}

export default MessagesItem;