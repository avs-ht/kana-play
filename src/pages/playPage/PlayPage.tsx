import { useContext } from "react"
import { PlayContext } from "../../app/context"

const PlayPage = () => {
    const play = useContext(PlayContext)
    return (
        <>
        {play.kana.map((e) => <button key={e.char}>{e.char} {e.pronunciation}</button>)}
        </>
    )
}

export default PlayPage