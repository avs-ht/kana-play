import { Link } from 'react-router-dom'
import styles from './ReturnButton.module.scss'
const ReturnButton = () => {
    return (
        <Link to={"/kana-play"} className={styles.button}>Вернуться к настройкам</Link>
    )
}

export default ReturnButton