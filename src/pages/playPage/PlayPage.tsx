import { useContext } from "react"
import { PlayContext } from "../../app/PlayContext"
import styles from './PlayPage.module.scss'
import GuessedLetter from "./guessedLetter/GuessedLetter"
import EndGameScreen from "./endGameScreen/EndGameScreen"
import PlayErrorScreen from "./playErrorScreen/playErrorScreen"
import StatContextProvider from "../../app/StatisticsContext"

const PlayPage = () => {
    const play = useContext(PlayContext)

    return (
        <StatContextProvider>
        <div className={styles.playPage}>
            {play.isPlay && play.kana.length !== 0 && <GuessedLetter/>}
            {play.isPlay && play.kana.length === 0 && <EndGameScreen/>}
            {!play.isPlay && <PlayErrorScreen/>}
        </div>
        </StatContextProvider>
    )
}

export default PlayPage