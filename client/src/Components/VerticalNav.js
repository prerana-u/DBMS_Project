import React from 'react'
import './CSS/nav.css';
import navbarimg from './Images/navbarimg.png';
import sflogo from './Images/sflogo.png';
import { Link } from 'react-router-dom';
const Verticalnav = ()=> {
  return (
    <div className='VNavContainer'>
      <nav className='vnav'>
         <div className="profile">
          <div className='logo1'><img src={sflogo} alt="navimg" /></div>
          <div className='img1'><img src={navbarimg} alt="navimg"/></div>
         </div>
         <div className="nav1">
         <ul>
            <li>
            <Link to="/td" className='active' id="link"><b><i className="fa fa-user" style={{color: "#FFF"}}></i>  Dashboard</b></Link>
            </li>
            <br/>
            <li>
            <Link to="/" id="link"><b><i className="fa fa-home"></i>  Home</b></Link>
            </li>
            <br/>
            <li>
            <Link to="/" id="link"><b><i className="fa fa-info-circle"></i>  About</b></Link>
            </li>
            <br/>
            <li>
            <Link to="/search" id="link"><b><i className="fa fa-search"></i>  Search</b></Link>
            </li>
            <br/>
            <li>
            <Link to="/login" id="link"><b><i className="fa fa-sign-out"></i>  Logout</b></Link>
            </li>
         
         </ul>
         </div>
      </nav>
    </div>
  )
}
export default Verticalnav;
