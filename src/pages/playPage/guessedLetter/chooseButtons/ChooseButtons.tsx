import React, { useContext } from 'react'
import { PlayContext } from '../../../../app/context'
import kana, { KANA } from '../../../../shared/logic/kana/kana'
import { KanaJSON } from '../../../../shared/types/kana'
import styles from './ChooseButtons.module.scss'

interface ChooseButtonsProps {
    char: KanaJSON
    setNewNumber: React.Dispatch<React.SetStateAction<number>>
    extRandomNumber: number
}
const ChooseButtons: React.FC<ChooseButtonsProps> = ({char, setNewNumber, extRandomNumber}) => {
    const play = useContext(PlayContext)
    let kanaWithoutChar = [...KANA.hiragana, ...KANA.katakana].filter((el) => el !== char)
    const randomNumber = Math.floor(Math.random() * 3)

    function rightClickButton() {
        play.setKana([...play.kana.slice(0, extRandomNumber), ...play.kana.slice(extRandomNumber+1)])
        setNewNumber(Math.floor(Math.random() * (play.kana.length - 2)))
    }
    return (
        <div className={styles.buttons}>
            {
                [0, 1, 2, 3].map((el) => {
                    console.log(el)
                    const random = Math.floor(Math.random()*kanaWithoutChar.length)
                    const isRightButton = el === randomNumber
                    const pron =  isRightButton ? char : kanaWithoutChar[random]
                    const onClickFunc = isRightButton ? rightClickButton : () => {}
                    kanaWithoutChar = [...kanaWithoutChar.slice(0, random), ...kanaWithoutChar.slice(random+1)]
                    
                    return <button key={el} onClick={onClickFunc}>{pron.pronunciation}</button>
                })
            }
        </div>
    )
}

export default ChooseButtons