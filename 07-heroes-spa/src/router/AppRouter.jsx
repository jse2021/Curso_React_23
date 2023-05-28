import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import {DcPage,HeroesRoutes,MarvelPage} from '../heroes';
import { LoginPage } from "../auth";
import {Navbar} from '../ui';





const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='LoginPage' element={<LoginPage/>}/>
                <Route path='/*' element={<HeroesRoutes/>}/>
            </Routes>
        </>
        
    );
};

export default AppRouter;