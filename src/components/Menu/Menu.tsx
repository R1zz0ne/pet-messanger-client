import { MenuProps } from "../../models/UIprops/Menu";
import styles from "./Menu.module.css";

const Menu: React.FC<MenuProps> = ({ isMenu, setIsMenu }) => {
    return (
        <div className={isMenu ? styles.menu : styles.menu_hidden}>
            <div className={isMenu ? styles.menu_nav : styles.menu_nav_hidden}>
                <div>menu</div>
                <div>profile</div>
                <div>friends</div>
                <div>menu</div>
            </div>
            <div className={isMenu ? styles.menu_opacity : styles.menu_opacity_hidden} onClick={() => setIsMenu(!isMenu)}>
            </div>
        </div>
    )
}

export default Menu;