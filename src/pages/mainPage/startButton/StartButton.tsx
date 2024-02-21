import { useAtom } from 'jotai'
import styles from './StartButton.module.scss'
import kanaAtom from '../settingsSection/kanaAtom'
const StartButton = () => {
    const [kana] = useAtom(kanaAtom)
    return (
        <button onClick={() => {
            const allKana = kana
            console.log(allKana)
        }}
        className={styles.button}>Начать практику</button>
    )
}

export default StartButton