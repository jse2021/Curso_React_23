import React from 'react';

 export const Message = () => {

useEffect(()=>{

    const onMouseMove = ({x,y})=>{
        const cords = {x,y};
        console.log(cords);
    }

    // escucha los movimientos del mouse
    window.addEventListener('mousemove', onMouseMove);
    
        return()=>{

            window.removeEventListener('mousemove', onMouseMove);
    
        }
    },[])



    return (
        <>
            <h1>Usuario ya existe</h1>
        </>
    );
};
