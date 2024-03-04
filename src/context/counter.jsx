import {createContext , useContext , useState} from 'react';


const countercontext = createContext(null);

export const useCounter = ()=>{
    return useContext(countercontext);
}

export const counterProvider = (props)=>{
    const [state,setState] = useState(0);
    return (
        <countercontext.Provider value={{state,setState}} >
            {props.children}
        </countercontext.Provider>
    )
}