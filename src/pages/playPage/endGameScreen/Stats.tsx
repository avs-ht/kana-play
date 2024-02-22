import { useContext } from "react"
import { StatContext } from "../../../app/StatisticsContext"
import styles from './Stats.module.scss'

const Stats = () => {
    const stat = useContext(StatContext)
    return (
        <div className={styles.objectsContainer}>
        {
            stat.objects.map(statObject => {
                let color : "bg-green-500" | "bg-orange-500" | "bg-red-500";
                switch(statObject.attempts) {
                    case 0:
                        color = "bg-green-500"
                        break
                    case 1:
                        color = "bg-orange-500"
                        break
                    default:
                        color = "bg-red-500"
                }
                return (
                    <div key={statObject.char} className={styles.statObject + " " + color}>
                        <div className="text-center">{statObject.char} ({statObject.pronunciation})</div>
                        {!statObject.firstTry && <div className="text-center">Ошибок: {statObject.attempts}</div>}
                    </div>
                )
            })
        }
        </div>
    )
}

export default Stats