import styles from "./Button.module.css"

export const Button: React.FC<JSX.IntrinsicElements["button"]> = ({ children, ...props }) => {
    return (
        <button
            className={styles.button}
            {...props}>
            {children}
        </button>
    )
}