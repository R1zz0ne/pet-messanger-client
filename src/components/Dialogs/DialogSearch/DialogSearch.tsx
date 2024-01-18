import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import styles from "./DialogSearch.module.css"

interface DialogSearchProps {
    setIsMenu: React.Dispatch<React.SetStateAction<boolean>>
    setSearchValue: React.Dispatch<React.SetStateAction<string>>
}

const DialogSearch: React.FC<DialogSearchProps> = ({ setIsMenu, setSearchValue }) => {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value)
    }

    return (
        <div className={styles.search}>
            <Button onClick={() => setIsMenu(true)}>menu</Button>
            <Input placeholder="Search" onChange={changeHandler}></Input>
        </div>
    )
}

export default DialogSearch;