import Header from "./header/Header"
import SettingsSection from "./settingsSection/SettingsSection"
import StartButton from "./startButton/StartButton"

const MainPage = () => {
    return (
        <div className="flex flex-col items-center">
            <Header/>
            <SettingsSection/>
            <StartButton/>
        </div>
    )
}

export default MainPage