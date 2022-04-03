
import { Children, createContext, useEffect, useState } from "react";

export const FactorContext = createContext([])


const FACTOR = 'factor'

const FactorContextProvider = ({ children }) => {


    //const [state, setState] = useState([]);

    const [state , setState] = useState(()=>{

        const factors = localStorage.getItem(FACTOR) ;
        return factors ? JSON.parse(factors) : [];

    })


    const addFactor = (factor) => {
        setState(prev => [
            ...prev,
            factor
        ])
    }

    useEffect(()=>{
        localStorage.setItem(FACTOR , state.length ? JSON.stringify(state) : '')
    } , [state])
    
    return <FactorContext.Provider value={{
        factors: state,
        addFactor
    }}>
        {children}
    </FactorContext.Provider>
}

export default FactorContextProvider