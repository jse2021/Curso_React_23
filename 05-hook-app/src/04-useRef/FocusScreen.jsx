import React, { useRef } from 'react';

const FocusScreen = () => {
    const inputRef = useRef();
    const onClick =()=>{
        // document.querySelector('input').select();
        // inputRef.current.select();
        
    }
    return (
        <>
        <h1>FocusScreen</h1>
        <hr />
            <input
                ref={inputRef}
                type="text"
                placeholder='ingrese su nombre'
                className='form-control'
            />
            <button className='btn btn-primary mt-2' onClick={onClick}>
                set Focus
            </button>
        </>

    );
};

export default FocusScreen;

