import { useAtom } from 'jotai'
import styles from './KanaButtons.module.scss'
import { kanaAtoms } from '../kanaAtom'
import kana, { kanaLength } from '../../../../shared/kana/kana'
import kanaChoice from '../../../../shared/types/kanaChoice'


// TODO: Make kana.ts functions
const KanaButtons = () => {
    const [hiragana, setHiragana] = useAtom(kanaAtoms['hiragana'])
    const [katakana, setKatakana] = useAtom(kanaAtoms['katakana'])


    return (
        <div className={styles.buttons}>
            <button onClick={() => {
                if (hiragana.length == kanaLength[kanaChoice.Hiragana]) {
                    setHiragana([])
                    return
                }

                setHiragana(kana[kanaChoice.Hiragana])
            }}
            className={hiragana.length === kanaLength[kanaChoice.Hiragana] ? "bg-white" : ""}>Хирагана</button>
            <button onClick={() => {
                if (katakana.length == kanaLength[kanaChoice.Katakana]) {
                    setKatakana([])
                    return
                }

                setKatakana(kana[kanaChoice.Katakana])
            }}
            className={katakana.length === kanaLength[kanaChoice.Katakana] ? "bg-white" : ""}>Катакана</button>
            <button onClick={() => {
                if (katakana.length === kanaLength[kanaChoice.Katakana] && hiragana.length === kanaLength[kanaChoice.Hiragana]) {
                    setKatakana([])
                    setHiragana([])
                    return
                }

                setKatakana(kana[kanaChoice.Katakana])
                setHiragana(kana[kanaChoice.Hiragana])
            }}
            className={katakana.length + hiragana.length === kanaLength[kanaChoice.Hiragana] + kanaLength[kanaChoice.Katakana] ? "bg-white" : ""}>Хирагана и Катакана</button>
        </div>
    )
}

export default KanaButtons