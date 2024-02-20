import Header from "./Header"
import SettingsSection from "./settingsSection/SettingsSection"
const MainPage = () => {
    return (
        <div className="flex flex-col items-center">
            <Header/>
            <SettingsSection/>
        </div>
    )
}

export default MainPage