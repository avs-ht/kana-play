import { ReactElement, createContext, useState } from "react";


export type statObject = {
    char: string
    pronunciation: string
    firstTry: boolean
    attempts: number
}
interface ContextProps {
    objects: statObject[]
    setObjects: React.Dispatch<React.SetStateAction<statObject[]>>
}
  
export const StatContext = createContext<ContextProps>({
    objects: [],
    setObjects: () => {}
});


const StatContextProvider: React.FC<{children : ReactElement}> = ({children}) => {
    const [objects, setObjects] = useState<statObject[]>([])
    return (
        <StatContext.Provider value={{objects, setObjects}}>{children}</StatContext.Provider>
    )
}

export default StatContextProvider