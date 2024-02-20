import { Gamepad2 } from "lucide-react"

const Header = () => {
    return (
        <header className="mb-5">
            <h1 className="flex items-start justify-center">
                <span className="text-5xl mr-2.5">Kana</span>
                <Gamepad2 className="inline-block mt-[5px]" size={48}/>
            </h1>
            <p className="max-w-[800px]">Используя ниже данные настройки, выберите подоходящие символы и начните практику!</p>
        </header>
    )
}

export default Header