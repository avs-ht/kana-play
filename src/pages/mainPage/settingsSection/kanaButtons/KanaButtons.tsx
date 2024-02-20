import styles from './KanaButtons.module.scss'



// TODO: Make kana.ts functions
const KanaButtons = () => {
    return (
        <div className={styles.buttons}>
            <button className="">Хирагана</button>
            <button className="">Катакана</button>
            <button className="">Хирагана и Катакана</button>
        </div>
    )
}

export default KanaButtons