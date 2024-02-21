import kana from "../../../../../../shared/logic/kana/kana"
import kanaChoice from "../../../../../../shared/types/kanaChoice"
import TemplateKanaButton from "./TemplateKanaButton"

const TemplateAlphabet: React.FC<{selectedKana: kanaChoice}> = ({selectedKana}) => {
    const selectedKanaAlphabet = kana[selectedKana]
    return (
        <div>
            {
                selectedKanaAlphabet.map((char) => {
                    return (
                        <TemplateKanaButton>{char}</TemplateKanaButton>
                    )
                })
            }
            
        </div>
    )
}

export default TemplateAlphabet