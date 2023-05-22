import React, { useCallback, useState } from 'react';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
    const [counter,setCounter]=useState(10);
    // sirve para memorizar funciones
    
   const incrementFather =  useCallback( (value) => {
        setCounter((c) => c + value);
    },[])
    
    return (
        <>
            <h1>useCallbak Hook: {counter}</h1>
            <hr />
            <ShowIncrement increment={incrementFather}/>
        </>
    );
};

export default CallbackHook;