import React from 'react';
import { HeroCard } from '../components/HeroCard';
import { useForm } from '../../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string' // para obtener la informacion del objeto search


export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    

    const {searchText,onInputChange} = useForm({
        searchText:''
    });

    const onSearchSubmit = (event) =>{
        event.preventDefault();
        if (searchText.trim().length<=1)return;
        navigate(`?q=${searchText}`);
        console.log({searchText})

    }

    return (
       <>
        <h1>Search</h1>
        <hr />
        <div className="row">
        <div className="col-5">
            <h4>Busqueda</h4>
            <hr />
            <form onSubmit={onSearchSubmit}>
                <input 
                    type="text" 
                    placeholder='Busqueda heroe'
                    className='form-control'
                    name='searchText'
                    autoComplete='off'
                    value={searchText}
                    onChange={onInputChange}
                />
                <button
                className='btn btn-outline-primary m-2'
                >Search</button>
            </form>
        </div>
        <div className="col-7">
            <h4>Resultados</h4>
            <hr />
            <div className='alert alert-primary'>
                search heroe
            </div>
            <div className='alert alert-danger'>
                No hero with <b>{q}</b>
            </div>

            {/* <HeroCard/> */}
        </div>
    </div>
        
       </>
    );
};

