import kana from "../../../../../../shared/logic/kana/kana"
import kanaChoice from "../../../../../../shared/types/kanaChoice"
import TemplateKanaButton from "./TemplateKanaButton"
import styles from './TemplateAlphabet.module.scss'

// TODO: Implement a function for positioning elements (big and small display)
const getGridPosFunc: (index : number, template?: {}) => {column: number, row: number} = (index) => {
    const pos = {
        column: index,
        row: 0
    }

    pos.column = 0
    return pos
}

const TemplateAlphabet: React.FC<{selectedKana: kanaChoice}> = ({selectedKana}) => {
    console.log(getGridPosFunc(0))
    return (
        <div className={styles.alphabet}>
            {
                kana[selectedKana].map((char) => {
                    return <TemplateKanaButton key={char} selectedKana={selectedKana}>{char}</TemplateKanaButton>
                })
            }
        </div>
    )
}

export default TemplateAlphabet