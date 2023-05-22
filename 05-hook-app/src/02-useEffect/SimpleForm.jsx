import React, { useEffect, useState } from 'react';
import  {Message}  from "../02-useEffect/Message";

const SimpleForm = () => {

    const [formState,setFormState] = useState({
        username:'stride',
        email:'fernando@gmail.com'
    });
    const {username,email}=formState;
    // funcion que permite hacer el cambio en cualquier input
    const onInputChange = ({target}) =>{
        const{name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        });
    }
    useEffect(()=>{
        // console.log('llamando a useEfect')
    },[]);

    useEffect(()=>{
        // console.log('llamando a useEfect')
        // mando el formState  como referencia cada vez que cambie
    },[formState]);
    useEffect(()=>{
        // console.log('llamando a useEfect')
        // cuando el email cambie, disparamos la dependencia 
    },[email]);

    
     
    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />
            <input 
                type="text"
                className="form-control"
                placeholder="username"
                name="username"
                value= {username}
                onChange={onInputChange}
                 />
                 <input 
                    type="text"
                    className="form-control mt-2"
                    placeholder="email"
                    name="email"
                    value = {email}
                    onChange={onInputChange}
                 />
                 {
                    (username==='strides') && <Message/>
                 }
                 
        </>
    );
};

export default SimpleForm;