import { atom, useAtom } from 'jotai'
import styles from './StartButton.module.scss'
import kanaAtom from '../settingsSection/kanaAtom'
import { getJSONCharsByChars } from '../../../shared/logic/kana/kana'
import { useContext, useState } from 'react'
import { PlayContext } from '../../../app/PlayContext'
import { Link } from 'react-router-dom'


const kanaLengthAtom = atom<number>((get) => 
Object.values(get(kanaAtom)).reduce((accum, arr) => accum + arr.length, 0))
const StartButton = () => {
    const [kana] = useAtom(kanaAtom)
    const [kanaLength] = useAtom(kanaLengthAtom)
    const play = useContext(PlayContext)
    return (
        <Link to="/kana-play/play" onClick={() => {
            play.setPlay(true)
            const includedKana = getJSONCharsByChars(kana)
            play.setKana(includedKana)
            
        }}
        className={styles.button}
        data-disabled={kanaLength === 0 ? true : false}>Начать практику</Link>
    )
}

export default StartButton