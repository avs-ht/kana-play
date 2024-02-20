import kanaChoice from '../../types/kanaChoice'
import KANA from './kana.json'
import { Kana, KanaJSON, KanaLength } from '../../types/kana'

const getChars: (kanaJSON: KanaJSON[]) => string[] = kanaJSON => kanaJSON.map(moji => moji.char)

const kana: Kana = {
    hiragana: getChars(KANA.hiragana),
    katakana: getChars(KANA.katakana)
}

export const kanaLength: KanaLength = {
    hiragana: kana[kanaChoice.Hiragana].length,
    katakana: kana[kanaChoice.Katakana].length
}

export default kana