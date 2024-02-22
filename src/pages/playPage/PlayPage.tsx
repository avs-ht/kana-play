import { useContext } from "react"
import { PlayContext } from "../../app/context"
import styles from './PlayPage.module.scss'
import Counter from "./counter/Counter"
import GuessedLetter from "./guessedLetter/GuessedLetter"

const PlayPage = () => {
    const play = useContext(PlayContext)

    return (
        <div className={styles.playPage}>
            <Counter />
            <GuessedLetter />
        </div>
    )
}

export default PlayPage