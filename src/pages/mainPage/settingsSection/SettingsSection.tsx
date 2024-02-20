import KanaAlphabet from "./kanaAlphabet/KanaAlphabet"
import KanaButtons from "./kanaButtons/KanaButtons"
import styles from './SettingsSection.module.scss'
const SettingsSection = () => {
    return (
        <>
        <div className={styles.kanaButtonsContainer}>
            <KanaButtons/>
        </div>
        <div className={styles.kanaContainer}>
            <KanaAlphabet/>
        </div>
        </>

    )
}

export default SettingsSection