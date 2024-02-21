import kanaChoice from "../../../../../shared/types/kanaChoice"
import TemplateAlphabet from "./templateAlphabet/TemplateAlphabet"

const Katakana = () => {
    return (
        <TemplateAlphabet selectedKana={kanaChoice.Katakana}/>
    )
}

export default Katakana