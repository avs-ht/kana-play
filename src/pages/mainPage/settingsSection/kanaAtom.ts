import { atom } from "jotai";
import { focusAtom } from "jotai-optics";
import { Kana } from "../../../shared/types/kana";
import kanaChoice from "../../../shared/types/kanaChoice";

export const kanaAtom = atom<Kana>({
    hiragana: [],
    katakana: []
})

export const kanaAtoms = {
    hiragana: focusAtom(kanaAtom, optic =>  optic.prop(kanaChoice.Hiragana)),
    katakana: focusAtom(kanaAtom, optic =>  optic.prop(kanaChoice.Katakana))
}

export default kanaAtom