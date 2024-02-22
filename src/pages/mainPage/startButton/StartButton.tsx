import { useAtom } from 'jotai'
import styles from './StartButton.module.scss'
import kanaAtom from '../settingsSection/kanaAtom'
import { getJSONCharsByChars } from '../../../shared/logic/kana/kana'
import { useContext } from 'react'
import { PlayContext } from '../../../app/PlayContext'
import { Link } from 'react-router-dom'
const StartButton = () => {
    const [kana] = useAtom(kanaAtom)
    const play = useContext(PlayContext)
    return (
        <Link to="/kana-play/play" onClick={() => {
            play.setPlay(true)
            const includedKana = getJSONCharsByChars(kana)
            play.setKana(includedKana)
            
        }}
        className={styles.button}>Начать практику</Link>
    )
}

export default StartButton