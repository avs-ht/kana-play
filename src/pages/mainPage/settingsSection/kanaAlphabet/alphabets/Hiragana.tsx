import kanaChoice from "../../../../../shared/types/kanaChoice"
import TemplateAlphabet from "./templateAlphabet/TemplateAlphabet"

const Hiragana = () => {
    return (
        <TemplateAlphabet selectedKana={kanaChoice.Hiragana}/>
    )
}

export default Hiragana