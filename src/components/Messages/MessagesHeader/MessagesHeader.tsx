import { IMessagesHeaderProps } from "../../../models/UIprops/IMessages";
import styles from "./MessagesHeader.module.css"

const MessagesHeader: React.FC<IMessagesHeaderProps> = ({ dialogName }) => {
    return (
        <div className={styles.messages_header}>
            {dialogName}
        </div>
    )
}

export default MessagesHeader;