import { useAtom } from 'jotai'
import styles from './StartButton.module.scss'
import kanaAtom from '../settingsSection/kanaAtom'
import { getJSONCharsByChars } from '../../../shared/logic/kana/kana'
import { useContext } from 'react'
import { playContext } from '../../../App'
const StartButton = () => {
    const [kana] = useAtom(kanaAtom)
    const play = useContext(playContext)
    return (
        <button onClick={() => {
            const includedKana = getJSONCharsByChars(kana)
        }}
        className={styles.button}>Начать практику</button>
    )
}

export default StartButton