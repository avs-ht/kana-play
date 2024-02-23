import { Gamepad2 } from "lucide-react"
import styles from './Header.module.scss'
import Tooltip from "../../../shared/ui/tooltip/Tooltip"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className={styles.header}>
            <h1 className={styles.title}>
                <span className={styles.titleText}>Kana</span>
                <Gamepad2 className={styles.gamepad} size={48}/>
            </h1>
            <div className={styles.description}>Используя ниже данные <Tooltip textTooltip="Нажмите на слово и вас перебросит на страницу с объяснением настроек"><Link to="/kana-play/settings" className={styles.settingLink}>настройки</Link></Tooltip>, выберите подоходящие символы и начните практику!</div>
        </header>
    )
}

export default Header