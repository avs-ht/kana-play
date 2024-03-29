import kanaChoice from '../types/kanaChoice'
import KANA_IMPORT from './kana.json'
import { Kana, KanaJSON, KanaLength } from '../types/kana'

const getChars: (kanaJSON: KanaJSON[]) => string[] = kanaJSON => kanaJSON.map(moji => moji.char)

export const KANA = KANA_IMPORT
const kana: Kana = {
    hiragana: getChars(KANA.hiragana),
    katakana: getChars(KANA.katakana)
}

export const kanaLength: KanaLength = {
    hiragana: kana[kanaChoice.Hiragana].length,
    katakana: kana[kanaChoice.Katakana].length
}


export const getJSONCharsByChars: (chars: Kana) => KanaJSON[] = (chars) => {
    const JSONChars: KanaJSON[] = []

    for (const [selectedKana, kanaChars] of Object.entries(chars)) {
        JSONChars.push(...KANA[selectedKana as kanaChoice].filter(((el) => kanaChars.includes(el.char))))
    }

    return JSONChars
}

export function getKana(): KanaJSON[] {
    const kanaArr: KanaJSON[] = [...KANA.hiragana, ...KANA.katakana]
    return kanaArr
}


export default kana
