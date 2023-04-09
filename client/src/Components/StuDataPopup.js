import React,{ useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import Popup from 'reactjs-popup';
import './CSS/popup.css';
import axios from 'axios';
import { Button } from '@mui/material';
export default function StuDataPopup(props) {
    
 
  const[data,setData]=useState([]);
 
  const navigate=useNavigate();
  var arr=[];
  
  const getRegStudents= () => {
    var fid=props.fid;
    
    axios.get("http://localhost:3001/get_reg_students", {
        params: { fid: fid}
  
      }).then((response) => {
        console.log(response.data.length)
        console.log(fid);
        if(response.data.length>0)
        setData(response.data);
        else{
            setData(["No data found"]);
        }
        console.log(data);
     
      })
};





    return (
                      
        <div >
            <Popup trigger=
                { <Button size="small" color="primary" >
                View More</Button>}
                modal nested onOpen={()=>{getRegStudents()}}>
                {
                    close => (
                        <div className='modal' >
                            <div className='content' >
                                <h2 style={{textAlign:'center'}}>Registered Students</h2>
                                <table style={{border:'1px solid black'}}>
                                    <tr> 
                                        <th>Register Number</th>
                                        <th>Student Name</th>
                                        <th>Semester</th>
                                        <th>Class</th>
                                        <th>Event Name</th>
                                    </tr>
                                    
                                        {data.map((val,key)=>{
                                            console.log(data[0]);
                                             if(data[0]==="No data found")
                                             {
                                                console.log("Hi");
                                                 return <tr><td colSpan={5}>No Registrations Yet</td></tr>
                                             }
                                             else{
                                                return(
                                               
                                                    <tr key={key}>
                                                    <td>{val.regno}</td>
                                                    <td>{val.name}</td>
                                                    <td>{val.semester}</td>
                                                    <td>{val.class}</td>
                                                    <td>{val.event_name}</td>
                                                    </tr>
                                                )
                                             }
                                           
                                        })}
                                    
                                </table>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};