import { useState } from 'react'
import styles from './EndGameScreen.module.scss'
import Stats from './Stats'
const EndGameScreen = () => {
    const [isStatOpened, setStatOpen] = useState<boolean>(false)

    return (
        <div className="w-full flex flex-col items-center">
            <div className="text-3xl text-center mb-3">
                Конец игры!
            </div>
            <div className="w-full flex justify-center">
                <div className={styles.statWrapper}>
                    <div className={styles.upperPart + (isStatOpened ? " mb-5" : "")}>
                        <span>Статистика ответов</span>
                        <button onClick={() => setStatOpen(prev => !prev)}>
                            {isStatOpened ? "Закрыть" : "Раскрыть"}
                        </button>
                    </div>
                    {isStatOpened && <Stats/>}
                </div>
            </div>

        </div>
    )
}

export default EndGameScreen