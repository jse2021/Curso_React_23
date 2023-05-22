import React, { useState } from 'react';
import { useCounter,useFetch} from '../hooks';
import LoadingQuote from './LoadingQuote';
import Quote from './Quote';



export const MultiplesCustomHooks = () => {
    const {counter,increment} = useCounter(1);
    const {data,isLoading,hastError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/5?=Walter White${counter}`);
    console.log({data,isLoading,hastError})
    
    // esto es necesario porque devuelve un arreglo en ves de un objeto
    //Si data es true, ejecuta el otro data  
    const {author,quote} = !!data && data[0];

    return (
        <>
            <h1>BreackingBad Quotes</h1>
            <hr />
            
            {/* condicional ternario */}

            {
                isLoading
                ?<LoadingQuote/>   
                :<Quote author={author} quote={quote}/>
            }

                <button className='btn btn-primary' onClick={()=>increment(1)}>
                        Next Quote
                </button>
        </>
        

    );
};

export default MultiplesCustomHooks;