import { ReactElement, createContext, useState } from "react";
import { KanaJSON } from "../shared/types/kana";

interface ContextProps {
    kana: KanaJSON[]
    isPlay: boolean,
    setKana: (newKana: KanaJSON[]) => void,
    setPlay: (newPlay: boolean) => void
  }
  
export const PlayContext = createContext<ContextProps>({
    kana: [],
    isPlay: false,
    setKana: () => {},
    setPlay: () => {}
  });


const PlayContextProvider: React.FC<{children : ReactElement}> = ({children}) => {
    const [kana, setKana] = useState<KanaJSON[]>([])
    const [isPlay, setPlay] = useState<boolean>(false)

    return (
        <PlayContext.Provider value={{kana, isPlay, setKana, setPlay}}>{children}</PlayContext.Provider>
    )
}

export default PlayContextProvider