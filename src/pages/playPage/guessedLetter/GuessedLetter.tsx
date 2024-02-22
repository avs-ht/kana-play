import { useContext, useState } from "react"
import { PlayContext } from "../../../app/context"

const GuessedLetter = () => {
    const play = useContext(PlayContext)
    const [randomNumber, newRandom] = useState<number>(Math.floor(Math.random() * (play.kana.length - 1)))
    return (
        <>
            <div className="">{play.kana[randomNumber]?.char}</div>
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