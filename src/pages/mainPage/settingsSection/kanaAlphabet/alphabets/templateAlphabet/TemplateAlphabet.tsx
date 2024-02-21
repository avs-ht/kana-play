import kana from "../../../../../../shared/logic/kana/kana"
import kanaChoice from "../../../../../../shared/types/kanaChoice"
import TemplateKanaButton from "./TemplateKanaButton"



const TemplateAlphabet: React.FC<{selectedKana: kanaChoice}> = ({selectedKana}) => {

    return (
        <div>
            {
                kana[selectedKana].map((char) => {
                    return <TemplateKanaButton key={char} selectedKana={selectedKana}>{char}</TemplateKanaButton>
                })
            }
        </div>
    )
}

export default TemplateAlphabet