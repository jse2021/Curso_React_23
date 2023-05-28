import React from 'react';
import { Navbar } from "../../ui";
import { Routes,Route, Navigate } from 'react-router-dom';
import { MarvelPage,SearchPage,DcPage,HeroPage } from "../../heroes";



export const HeroesRoutes = () => {
    return (
        <>

            <Navbar/>

        <div className='container'>
                <Routes>
                    <Route path='marvel' element={<MarvelPage/>}/>
                    <Route path='dc' element={<DcPage/>}/>
                    <Route path='search' element={<SearchPage/>}/>
                    <Route path='hero/:id' element={<HeroPage/>}/>


                <Route path='/' element={<Navigate to='/marvel'/>}/>
 
            </Routes>
        </div>

            
        </>
    );
};
