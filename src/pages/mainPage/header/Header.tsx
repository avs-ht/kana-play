import { Gamepad2 } from "lucide-react"
import styles from './Header.module.scss'
import Tooltip from "../../../shared/ui/tooltip/Tooltip"

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <span className={styles.titleText}>Kana</span>
                <Gamepad2 className={styles.gamepad} size={48}/>
            </h1>
            <div className={styles.description}>Используя ниже данные <Tooltip textTooltip="Нажмите на слово и вас перебросит на страницу с объяснением настроек"><span className={styles.settingLink}>настройки</span></Tooltip>, выберите подоходящие символы и начните практику!</div>
        </header>
    )
}

export default Header