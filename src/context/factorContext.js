
import { Children, createContext, useEffect, useState } from "react";

export const FactorContext = createContext([])




const FactorContextProvider = ({ children }) => {


    const [state, setState] = useState([])

    const addFactor = (factor) => {
        setState(prev => [
            ...prev,
            factor
        ])
    }

    return <FactorContext.Provider value={{
        factors: state,
        addFactor
    }}>
        {children}
    </FactorContext.Provider>
}

export default FactorContextProvider