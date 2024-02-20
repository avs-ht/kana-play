import { useAtom } from 'jotai'
import styles from './KanaButtons.module.scss'
import { hiraganaAtom } from '../kanaSettingsAtom'



// TODO: Make kana.ts functions
const KanaButtons = () => {
    const [currHiragana, setCurrHiragana] = useAtom(hiraganaAtom)
    return (
        <div className={styles.buttons}>
            <button className={currHiragana.length === 46 ? "bg-slate-300" : ""}>Хирагана</button>
            <button className="">Катакана</button>
            <button className="">Хирагана и Катакана</button>
        </div>
    )
}

export default KanaButtons