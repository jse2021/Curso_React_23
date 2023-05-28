import React from 'react';
import { Route,Routes,Navigate,Link } from "react-router-dom";
import { HomePage } from "./HomePage";
import { AboutPage } from "./AboutPage";
import { LoginPage } from "./LoginPage";
import {Navbar} from "./Navbar";
import UserProvider from './Context/UserProvider';


const MainApp = () => {
    return (
      <UserProvider>
          <h1>MainApp</h1>
          <Navbar/>
            <hr />
            <Routes>
                <Route path="/" element = {<HomePage/>} />
                <Route path="AboutPage" element = {<AboutPage/>} />
                <Route path="LoginPage" element = {<LoginPage/>} />
                <Route path="/*" element = {<Navigate to = "/AboutPage" /> } />
            </Routes>      
      </UserProvider>
    );
};

export default MainApp;