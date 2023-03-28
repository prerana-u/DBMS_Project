import React, {  useState } from "react";
import './CSS/register.css';
import Axios from 'axios';
import students from './Images/students.png';
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";



function StudentReg() {
   const supabase = createClient("https://npropcvowslhzxxaigvi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wcm9wY3Zvd3NsaHp4eGFpZ3ZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTM5OTg3NywiZXhwIjoxOTk0OTc1ODc3fQ.iJ_vCpYUyRFEIP3ZgfYVZvXaQoAHLK7OtierGGpasOA");
    const [emailReg, setemailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState ("");
    const [namereg, setnameReg] = useState ("");
    const [regnoReg, setregnoReg] = useState ("");
    const [depReg, setdepReg] = useState ("");
    const [phreg, setphReg] = useState ("");
    const [semreg, setsemReg] = useState ("");
    const [classreg, setclassReg] = useState ("");
    const navigate=useNavigate();

    const register1 = (event) => {
      event.preventDefault();
       Axios.post("http://localhost:3001/register", {
         name:namereg,
         regno:regnoReg,  
         email: emailReg,
         password: passwordReg,
         dep:depReg,
         phone:phreg,
         class1:classreg,
         semester:semreg,
        }).then((response) => {
           console.log(response);
           navigate('/login');
        });
      };
 
      async function upload(event) 
      {
         console.log(namereg);
         const avatarFile = event.target.files[0]
         const { data, error } = await supabase
         .storage
         .from('pictures')
         .upload('public/'+namereg+'.png', avatarFile, {
            cacheControl: '3600',
            upsert: true
         })
         console.log("hello");
      }

  
 
    return (

        <div id="reg">
       
        <div className="registration">
        <h1>Student Registration</h1>
        <h3>Enter Your Details Below</h3>
            <form>
           
            <div id="fimg">
            <img src={students} alt="studentimage" id="stuimage"></img>
            </div>
           <div id="finput" >
            <label>Name</label><br></br>
            <input type="text" className="input1" required onChange={(e) =>{
               setnameReg(e.target.value);
            }}/> <br />
           <div style={{display:"flex", width:"fit-content"}}>
           <div style={{display: "inline-block"}}>
                  <label style={{  display: "block"}}>Register Number</label>
                  <input type="number"  style={{width:"80%"}} required onChange={(e) =>{
                     setregnoReg(e.target.value);
                  }}/>
               </div>
               <div style={{display: "inline-block",width:"225px", marginLeft:"-30px"}}>
                  <label  style={{  display: "block"}}>Department</label>
               <input type="text" className="input1" style={{width:"90%"}} required onChange={(e) =>{
                  setdepReg(e.target.value);
               }}/> 
               </div>
           </div>
           <div style={{display:"flex", width:"fit-content"}}>
           <div style={{display: "inline-block"}}>
                  <label style={{  display: "block"}}>Semester</label>
                  <input type="number" max="6" defaultValue={1} style={{width:"80%"}} required onChange={(e) =>{
                     setsemReg(e.target.value);
                  }}/>
               </div>
               <div style={{display: "inline-block",width:"225px", marginLeft:"-30px"}}>
                  <label  style={{  display: "block"}}>Class</label>
               <input type="text" className="input1" style={{width:"90%"}} required onChange={(e) =>{
                  setclassReg(e.target.value);
               }}/> 
               </div>
           </div>
       
            <label>Email ID</label>
            <input type="email" required onChange={(e) => {
               setemailReg(e.target.value);
            }}/><br/>

             <div style={{display:"flex", width:"445px"}}>
             <div style={{display: "inline-block"}}>
                  <label>Password</label>
                  <input type="password" style={{width:"80%"}} required onChange={(e) =>{
                        setPasswordReg(e.target.value);
                     }}/> 
                 
               </div>
               <div style={{display: "inline-block",width:"300px",marginLeft:"-30px"}}>
                  <label>Confirm Password</label>
                     <input type="password" style={{width:"90%"}} required onChange={(e) =>{
                           setPasswordReg(e.target.value);
                        }}/> 
               </div>
           </div>
           
            <label>Phone Number</label>
            <input type="tel" required onChange={(e) =>{
               setphReg(e.target.value);
            }}/> <br />
            <label>Choose a Profile Photo:  </label>
            <input type="file" id="myfile" name="myfile" onChange={(e)=>(upload(e))}></input>
            <br></br>
            <button onClick={(e)=>register1(e)} id="regbtn"> Register</button>
            </div>
            </form>
           
         </div>
    </div>
    );
 }
  
 export default StudentReg;