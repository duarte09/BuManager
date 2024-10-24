import { createContext } from "react";

export const LojaContext = createContext(null)

const LojaContextProvider = (props) => {



    const contextValue = {

    }
    return (
        <LojaContext.Provider value={contextValue}>
            {props.children}
        </LojaContext.Provider>
    )
}

export default LojaContextProvider;