import React, { useState } from 'react';

export const CounterApp = () => {

    // usestate para cambiar el valor del contador
    const [state,setCounter]=useState({
        counter1:10,
        counter2:20,
        counter3:30
    });
    const  {counter1,counter2,counter3} = state;

    return (
        <div>
            <>
                <h1>Counter1: {counter1}</h1>
                <h1>Counter2: {counter2}</h1>
                <h1>Counter3: {counter3}</h1>
                <hr />
                {/* llamar el onclikc coloar la expresion que va ser una funcion y para cambiar el onclick va ser el setCounter */}
                <button className="btn" onClick={()=>setCounter({
                    //no importa cuantas propiedades tenga el state, sse esparce y toma todo
                    ...state,
                    counter1:counter1+1,
                })}>+1</button>
            </>
        </div>
    );
};

