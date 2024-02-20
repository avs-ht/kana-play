import { useState } from 'react'
import styles from './KanaAlphabet.module.scss'
import Hiragana from './alphabets/Hiragana'
import Katakana from './alphabets/Katakana'
const KanaAlphabet = () => {
    const [displayedAlphabet, setAplhabet] = useState<"hiragana" | "katakana">("hiragana")
    const isDisplayedHiragana: () => boolean = () => {
        return displayedAlphabet === "hiragana"
    }
    return (
        <div className={styles.kanaAlphabetContainer}>
            <div className={styles.buttons}>
                <button className={isDisplayedHiragana() ? "bg-white" : ""} onClick={() => setAplhabet("hiragana")}>Хирагана</button>
                <button className={isDisplayedHiragana() ? "" : "bg-white"}onClick={() => setAplhabet("katakana")}>Катакана</button>
            </div>
            <div className={styles.kanaAlphabet}>
                {isDisplayedHiragana() ? <Hiragana/> : <Katakana/>}
            </div>
        </div>
    )
}

export default KanaAlphabet