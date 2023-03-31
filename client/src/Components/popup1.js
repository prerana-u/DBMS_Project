import React,{useState} from 'react';
import Popup from 'reactjs-popup';
import './CSS/popup.css';
import axios from 'axios';

export default function Popup1() {
        const [name, setname] = useState("");
        const [required, setrequired] = useState ("");
        const [startdate, setstartdate] = useState ("");
        const [Duration, setDuration] = useState ("");
        
        const popupform = () => {
         
           axios.post("http://localhost:3001/multicard1", {
             Name: name,
             Required: required,
             startdate_1 : startdate,
             duration: Duration,
             tid:sessionStorage.getItem("tid"),
            }).then((response) => {
               console.log(response);
               
        });
    };
    return (
     
        <div>
            <Popup trigger=
                {<button id="#pop" className='pop'> Add Project </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                            <h2 style={{textAlign:'center'}}>Enter Project Details</h2>
                                <form>
                                    <label>
                                        Name:
                                        <input type="text" className="inputfields" onChange={(e) => {setname(e.target.value);}}/>
                                    </label><br/>
                                    <label>
                                    Duration:
                                        <input type="text" className="inputfields" onChange={(e) => {setDuration(e.target.value);}}/>
                                    
                                    </label><br/>
                                    <label>
                                    Skill Required:
                                        <textarea className="inputfields" onChange={(e) => {setrequired(e.target.value);}}/>
                                    </label><br/>
                                    <label>
                                    Start Date:
                                        <input type="date" className="inputfields" onChange={(e) => {setstartdate(e.target.value);}}/>
                                    </label><br/>
                                    <br/>
                                    <input type="submit" value="Submit" onClick={popupform}/>
                                </form>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};