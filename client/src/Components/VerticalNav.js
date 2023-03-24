import React from 'react'
import './CSS/nav.css';
import navbarimg from './Images/navbarimg.png';
import sflogo from './Images/sflogo.png';
import { Link } from 'react-router-dom';
import { createClient } from "@supabase/supabase-js";
import { useState } from 'react';

const Verticalnav = (props)=> {
  console.log(props.role);
 const [uname,setUname]=useState("");

  const supabase = createClient("https://npropcvowslhzxxaigvi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wcm9wY3Zvd3NsaHp4eGFpZ3ZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTM5OTg3NywiZXhwIjoxOTk0OTc1ODc3fQ.iJ_vCpYUyRFEIP3ZgfYVZvXaQoAHLK7OtierGGpasOA");
	
 async function fetchdata()
 {
    if(props.role==="teacher")
    {
      setUname(sessionStorage.teacherName);
      console.log(uname);
    }
    else
    {
      setUname(sessionStorage.studentName);
    }
    if(props.cpage==="dashboard")
    {
      document.getElementsByName("dashboard").className="active";
      console.log(document.getElementsByName("dashboard").className);
      console.log("Dashboard");
    }
    else{
      console.log(props.cpage);
    }

    
 }
 
 const { data, error } = supabase
 .storage
 .from('pictures')
 .getPublicUrl('public/'+uname+'.png')
 console.log(data.publicUrl);



 
  
  return (
    <div className='VNavContainer' onLoad={fetchdata}>
      <nav className='vnav'>
         <div className="profile">
          <div className='logo1'><img src={sflogo} alt="navimg" /></div>
          <div className='img1'><img src={data.publicUrl} alt="navimg"/></div>
         </div>
         <div className="nav1">
         <ul>
            <li>
            <Link to="/td" name="dashboard"  className="idle" id="link"><b><i className="fa fa-user" style={{color: "#FFF"}}></i>  Dashboard</b></Link>
            </li>
            <br/>
            <li>
            <Link to="/"  name="home" className="idle" id="link"><b><i className="fa fa-home"></i>  Home</b></Link>
            </li>
            <br/>
            <li>
            <Link to="/" name="about" className="idle" id="link"><b><i className="fa fa-info-circle"></i>  About</b></Link>
            </li>
            <br/>
            <li>
            <Link to="/search" className="idle" name="search" id="link"><b><i className="fa fa-search"></i>  Search</b></Link>
            </li>
            <br/>
            <li>
            <Link to="/login" className="idle" id="link"><b><i className="fa fa-sign-out"></i>  Logout</b></Link>
            </li>
         
         </ul>
         </div>
      </nav>
    </div>
  )
}
export default Verticalnav;
