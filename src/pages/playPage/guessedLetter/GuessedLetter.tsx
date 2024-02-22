import { useContext, useState } from "react"
import { PlayContext } from "../../../app/context"
import Counter from "./counter/Counter"
import ChooseButtons from "./chooseButton/ChooseButtons"

const GuessedLetter = () => {
    const play = useContext(PlayContext)
    const [randomNumber, newRandom] = useState<number>(Math.floor(Math.random() * (play.kana.length - 1)))
    return (
        <>
            <Counter />
            <div>{play.kana[randomNumber]?.char}</div>
            <ChooseButtons char={play.kana[randomNumber]}/>
            <button onClick={
                () => {
                    play.setKana([...play.kana.slice(0, randomNumber), ...play.kana.slice(randomNumber+1)])
                    newRandom(Math.floor(Math.random() * (play.kana.length - 2)))
                }
            }>угадал</button>
        </>
    )
}

export default GuessedLetter    