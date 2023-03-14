import React, {  useState } from "react";
import './CSS/register.css';
import Axios from 'axios';
import teacher from './Images/teacher.png';
function TeacherReg() {
    const [emailReg, setemailReg] = useState("");
    const [passwordReg, setPasswordReg] = useState ("");
    const [namereg, setnameReg] = useState ("");
    const [depReg, setdepReg] = useState ("");
    const [phreg, setphReg] = useState ("");
    const register1 = () => {
     
       Axios.post("http://localhost:3001/registerTeach", {
         name:namereg,
         email: emailReg,
         password: passwordReg,
         dep:depReg,
         phone:phreg,
        }).then((response) => {
           console.log(response);
        });
      };
 
 
    return (

        <div id="reg">
      
          <div className="registration">
          <h1>Teacher Registration</h1>
          <h3>Enter Your Details Below</h3>
            <form>
            <div id="fimg" style={{padding:"30px"}}>
            <img src={teacher} alt="studentimage"></img>
            </div>
           <div id="finput" >
            <label>Name</label><br></br>
            <input type="text" className="input1" required onChange={(e) =>{
               setnameReg(e.target.value);
            }}/> <br />
            <label>Department</label>
            <input type="text" className="input1" required onChange={(e) =>
            {
                setdepReg(e.target.value);
            }
             }/>
             <br/>
            <label>Email ID</label>
            <input type="email" required onChange={(e) => {
               setemailReg(e.target.value);
            }}/><br/>

             <div style={{display:"flex", width:"445px"}}>
             <div style={{display: "inline-block"}}>
                  <label>Password</label>
                  <input type="password" required onChange={(e) =>{
                        setPasswordReg(e.target.value);
                     }}/> 
                 
               </div>
               <div style={{display: "inline-block",width:"300px"}}>
                  <label>Confirm Password</label>
                     <input type="password" required onChange={(e) =>{
                           setPasswordReg(e.target.value);
                        }}/> 
               </div>
           </div>
           
            <label>Phone Number</label>
            <input type="tel" required onChange={(e) =>{
               setphReg(e.target.value);
            }}/> <br />
            
            <button onClick={register1} id="regbtn"> Register</button>
            </div>
            </form>
           
         </div>
    </div>
    );
 }
  
 export default TeacherReg;