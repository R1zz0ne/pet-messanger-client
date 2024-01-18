import styles from "./MessagesHeader.module.css"

interface MessagesHeaderProps {
    dialogName: string
}

const MessagesHeader: React.FC<MessagesHeaderProps> = ({ dialogName }) => {
    return (
        <div className={styles.messages_header}>
            {dialogName}
        </div>
    )
}

export default MessagesHeader;