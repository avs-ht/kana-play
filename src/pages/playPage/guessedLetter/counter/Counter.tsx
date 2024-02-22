import { useContext } from "react"
import { PlayContext } from "../../../../app/PlayContext"

function conjugateString(n: number): string {
    let message = "Осталось " + n + " символов";
  
    if (n === 1) {
      message = "Остался последний cимвол";
    } else if (n !== 0 && (n % 10 === 2 || n % 10 === 3 || n % 10 === 4) && !(n >= 12 && n <= 14)) {
      message = "Осталось " + n + " символа";
    }
  
    return message;
  }
const Counter = () => {
    const play = useContext(PlayContext)
    const length = play.kana.length

    return (
        <div className="text-3xl mb-2">{conjugateString(length)}</div>
    )
}

export default Counter