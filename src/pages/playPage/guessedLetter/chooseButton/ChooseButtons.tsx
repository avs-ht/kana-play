import { KANA } from '../../../../shared/logic/kana/kana'
import { KanaJSON } from '../../../../shared/types/kana'
import styles from './ChooseButtons.module.scss'

interface ChooseButtonsProps {
    char: KanaJSON
}
const ChooseButtons: React.FC<ChooseButtonsProps> = (char) => {
    const kanaWithoutChar = KANA
    const randomNumber = Math.floor(Math.random() * 3)
    return (
        <div className={styles.buttons}>
            {
                [0, 1, 2, 3].map((el) => {
                    return <button key={el}>{}</button>
                })
            }
        </div>
    )
}

export default ChooseButtons