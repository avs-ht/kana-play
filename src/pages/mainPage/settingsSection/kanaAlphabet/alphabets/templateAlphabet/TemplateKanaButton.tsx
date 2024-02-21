import { atom, useAtom } from "jotai"
import kanaChoice from "../../../../../../shared/types/kanaChoice"
import { kanaAtoms } from "../../../kanaAtom"

interface TKBProps {
    children: string
    selectedKana: kanaChoice

}
const TemplateKanaButton: React.FC<TKBProps> = ({children, selectedKana}) => {
    const CHAR: string = children; 
    const [_, setKanaAlphabet] = useAtom(kanaAtoms[selectedKana])
    
    const charInSelectedKanaAtom = atom((get) => get(kanaAtoms[selectedKana]).includes(CHAR))
    const [charInSelectedKana] = useAtom(charInSelectedKanaAtom)
    return (
        <button  onClick={() => {
            if (charInSelectedKana) {
                setKanaAlphabet((kanaAlphabet: string[]) => {
                   return kanaAlphabet.filter((char) => char !== CHAR);
                })
                return          
            }
            setKanaAlphabet((kanaAlphabet: string[]) => [...kanaAlphabet, CHAR])
        }}
        className={charInSelectedKana ? "bg-white" : ""}>{children}</button>
    )
}

export default TemplateKanaButton