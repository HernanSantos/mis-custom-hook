import React, { useState } from 'react'

export const useCouter = (initialState = 10) => {

    const [couter, setCouter] = useState(initialState);

    const increment = () =>{
        setCouter(couter + 1);
    }
    const decrement = () =>{
        setCouter(couter-1);
    }
    const reset = ()=>{
        setCouter(initialState);
    }
    return{
        couter,
        increment,
        decrement,
        reset
    }
}
