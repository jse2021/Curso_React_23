import React from 'react';
import AboutPage from './AboutPage';
import LoginPage from './LoginPage';
import { Route,Routes,Navigate,Link,NavLink } from "react-router-dom";
export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary rounded-3">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">UseContex</Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                
                <NavLink 
                    className={({isActive})=> `nav-link ${isActive ? 'active':''}`}
                    to="/">Home
                </NavLink>

                <NavLink 
                    className={({isActive})=> `nav-link ${isActive ? 'active':''}`}
                    to="/aboutPage">About
                </NavLink>

                <NavLink 
                    className={({isActive})=> `nav-link ${isActive ? 'active':''}`}
                    to="/loginPage">Login
                </NavLink>

            </ul>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;