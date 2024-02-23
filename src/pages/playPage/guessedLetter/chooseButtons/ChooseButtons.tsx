import React, { useContext, useRef } from 'react'
import { PlayContext } from '../../../../app/PlayContext'
import { getKana } from '../../../../shared/kana/kana'
import { KanaJSON } from '../../../../shared/types/kana'
import styles from './ChooseButtons.module.scss'
import { StatContext, statObject } from '../../../../app/StatisticsContext'

interface ChooseButtonsProps {
    char: KanaJSON
    setNewNumber: React.Dispatch<React.SetStateAction<number>>
    extRandomNumber: number
}
const ChooseButtons: React.FC<ChooseButtonsProps> = ({char, setNewNumber, extRandomNumber}) => {
    const play = useContext(PlayContext)
    const stat = useContext(StatContext)
    const attempts = useRef<{[key in string]: number}>({})
    const buttons = useRef<HTMLDivElement>(null)
    let kanaWithoutChar = getKana().filter((el) => el.pronunciation !== char.pronunciation)


    const randomNumber = Math.floor(Math.random() * 3.9)
    const currChar = play.kana[extRandomNumber]

    function rightClickButton() {
        play.setKana([...play.kana.slice(0, extRandomNumber), ...play.kana.slice(extRandomNumber+1)])
        setNewNumber(Math.floor(Math.random() * (play.kana.length - 2)))

        const newStatObject : statObject = {
            char: currChar.char,
            pronunciation: currChar.pronunciation,
            firstTry: true,
            attempts: currChar.char in attempts.current ?  attempts.current[currChar.char] : 0
        }

        if (newStatObject.attempts !== 0) {
            newStatObject.firstTry = false
        }
        console.log(newStatObject)
        
        stat.setObjects(prev => [...prev, newStatObject])

        for (let i = 0; i < 4; i++) {
            (buttons.current?.children[i] as HTMLButtonElement).disabled = false
        }
    }

    function wrongClickButton(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const button = event.target as HTMLButtonElement
        button.disabled = true
        button.innerText = "x_x"
        button.classList.remove("text-2xl")
        button.classList.add("text-3xl")

        if (currChar.char in attempts.current) {
            attempts.current[currChar.char] += 1
            return
        }

        attempts.current[currChar.char] = 1
    }

    return (
        <div ref={buttons} className={styles.buttons}>
            {
                [0, 1, 2, 3].map((el) => {
                    const random = Math.floor(Math.random()*kanaWithoutChar.length)
                    const isRightButton = el === randomNumber
                    const pron =  isRightButton ? char : kanaWithoutChar[random]
                    const onClickFunc = isRightButton ? rightClickButton : wrongClickButton

                    kanaWithoutChar = kanaWithoutChar.filter((char) => {
                        return char.pronunciation !== pron.pronunciation
                    })

                    console.log(kanaWithoutChar)

                    let isSmalled = false
                    if (pron.pronunciation.includes('/')) {
                        isSmalled = true
                    }
                    return <button 
                    className={isSmalled ? 'text-2xl' : 'text-3xl'}
                    key={el} 
                    onClick={(event) => onClickFunc(event)}
                    disabled={false}>
                        {pron.pronunciation}
                    </button>
                })
            }
        </div>
    )
}

export default ChooseButtons