import styles from "./Input.module.css"

export const Input: React.FC<JSX.IntrinsicElements["input"]> = ({ ...props }) => {
    return (
        <input
            className={styles.input}
            {...props} />
    )
}