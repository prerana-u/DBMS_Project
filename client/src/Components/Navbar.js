import React from 'react';
import { Outlet, Link } from "react-router-dom";
import './CSS/navbar.css';
import logo from './Images/sflogo.png';
const Navbar= () =>{
  return (
  <div>
    <Link to="/"> <img src={logo} alt="logo" id="logo"></img></Link>
    <nav>
    
        <ul>
            <li>
              <Link to="/"><b><em> SkillFord</em></b></Link>
            </li>
            <li id="ab">
              <Link to="/about"><b><i className="fa fa-info-circle"></i>  About</b></Link>
              </li>
            <li id="log">
              <Link to="/register"><b> <i className="fa fa-user-plus"></i>  Register</b></Link>
            </li>
            <li id="log">
              <Link to="/login"><b> <i className="fa fa-sign-in"></i>  Login</b></Link>
              </li>
        </ul>
        
    </nav>
    <Outlet />
  </div>
  );

}
export default Navbar;