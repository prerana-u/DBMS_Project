import React from 'react'
import './CSS/nav.css';

import sflogo from './Images/sflogo.png';

import { createClient } from "@supabase/supabase-js";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Verticalnav = (props)=> {
  //console.log(props.role);
  const [uname,setUname]=useState("");
  const [nlink,setnlink]=useState("");
  const supabase = createClient("https://npropcvowslhzxxaigvi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wcm9wY3Zvd3NsaHp4eGFpZ3ZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTM5OTg3NywiZXhwIjoxOTk0OTc1ODc3fQ.iJ_vCpYUyRFEIP3ZgfYVZvXaQoAHLK7OtierGGpasOA");


  function fetchdata()
 {
    if(props.role==="teacher")
    {
      setUname(sessionStorage.teacherName);
      setnlink("/td");

      //console.log(uname);
    }
    else
    {
      setUname(sessionStorage.studentName);
      setnlink("/studentdash");
      console.log( document.getElementById("s").value);
      document.getElementById("s").innerHTML="<b>Edit Skills</b>";
      document.getElementById('sicon').className="fa fa-pencil";
    }


    
 }
 
 const { data, error } = supabase
 .storage
 .from('pictures')
 .getPublicUrl('public/'+uname+'.png')
 //console.log(data.publicUrl);



 
  
  return (
    <div className='VNavContainer' onLoad={()=>{fetchdata()}}>
      <nav className='vnav'>
         <div className="profile">
          <div className='logo1'><img src={sflogo} alt="navimg" /></div>
          <div className='img1'><img src={data.publicUrl} alt="navimg"/></div>
         </div>
         <div className="nav1">
         <ul>
            <li>
            <NavLink to={nlink} name="dashboard" activeClassname='active' id="link"><b><i className="fa fa-user" style={{color: "#FFF"}}></i>  Dashboard</b></NavLink>
            </li>
            <br/>
            <li>
            <NavLink to="/search" activeClassname='active'  name="search" id="link"><i id="sicon" className="fa fa-search"></i> <b id="s"> Search</b></NavLink>
            </li>
            <br/>
            <li>
            <NavLink to="/"  name="home" activeClassname='active' id="link"><b><i className="fa fa-home"></i>  Home</b></NavLink>
            </li>
            <br/>
            <li>
            <NavLink to="/" name="about" activeClassname='active' id="link"><b><i className="fa fa-info-circle"></i>  About</b></NavLink>
            </li>
            <br/>
            
            <li>
            <NavLink to="/login"  id="link"><b><i className="fa fa-sign-out"></i>  Logout</b></NavLink>
            </li>
         
         </ul>
         </div>
      </nav>
    </div>
  )
}
export default Verticalnav;
