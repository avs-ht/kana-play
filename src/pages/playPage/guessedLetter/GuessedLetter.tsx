import { useContext, useState } from "react"
import { PlayContext } from "../../../app/PlayContext"
import Counter from "./counter/Counter"
import ChooseButtons from "./chooseButtons/ChooseButtons"
import styles from './GuessedLetter.module.scss'
const GuessedLetter = () => {
    const play = useContext(PlayContext)
    const [randomNumber, newRandom] = useState<number>(Math.floor(Math.random() * (play.kana.length - 1)))
    return (
        <>
            <Counter />
            <div className={styles.guessLetter}>{play.kana[randomNumber]?.char}</div>
            <ChooseButtons char={play.kana[randomNumber]} setNewNumber={newRandom} extRandomNumber={randomNumber}/>
        </>
    )
}

export default GuessedLetter    