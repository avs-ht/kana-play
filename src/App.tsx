import MainPage from "./pages/mainPage/MainPage"
import { createContext } from "react";
import { KanaJSON } from "./shared/types/kana";



interface ContextProps {
  kana: KanaJSON[]
  isPlay: boolean
}

export const playContext = createContext<ContextProps>({
  kana: [],
  isPlay: false
});


function App() {
  
  return (
    <div className="w-full min-h-full overflow-hidden p-5">
      <MainPage/>    
    </div>
  )
}

export default App
