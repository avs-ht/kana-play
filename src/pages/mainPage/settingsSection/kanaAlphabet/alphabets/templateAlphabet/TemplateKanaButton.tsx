import { Atom, atom, useAtom } from "jotai"
import kanaChoice from "../../../../../../shared/types/kanaChoice"
import { kanaAtoms } from "../../../kanaAtom"
import { useMemo } from "react"

interface TKBProps {
    children: string
    selectedKana: kanaChoice

}
const TemplateKanaButton: React.FC<TKBProps> = ({children, selectedKana}) => {
    const CHAR: string = children; 
    const [_, setKanaAlphabet] = useAtom(kanaAtoms[selectedKana])
    
    const charInSelectedKanaAtom = useMemo(() => atom((get) => get(kanaAtoms[selectedKana]).includes(CHAR)), [kanaAtoms[selectedKana]])

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