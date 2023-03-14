import React,{useState} from 'react';
import Popup from 'reactjs-popup';
import './CSS/popup.css';
import axios from 'axios';

export default function Popup1() {
        const [name, setname] = useState("");
        const [org, setorg] = useState ("");
        const [mode, setmode] = useState("");
        const [startdate, setstartdate] = useState ("");
        const [enddate, setenddate] = useState("");
        const [description, setdescription] = useState ("");
        const [type, settype] = useState ("");
        const popupform = () => {
         
           axios.post("http://localhost:3001/multicard", {
             name: name,
             organization: org,
             mode_1: mode,
             startdate_1 : startdate,
             enddate_1: enddate,
             Description: description,
             Type: type,
            }).then((response) => {
               console.log(response);
        });
    };
    return (
     
        <div>
            <Popup trigger=
                {<button id="#pop" className='pop'> Add fest </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                                <h2 style={{textAlign:'center'}}>Enter Fest Details</h2>
                                <form>
                                    <label>
                                        Name:
                                        <input type="text" className="inputfields" onChange={(e) => {setname(e.target.value);}}/>
                                    </label><br/>
                                    <label>
                                        Organization:
                                        <input type="text" className="inputfields" onChange={(e) => {setorg(e.target.value);}}/>
                                    </label><br/>
                                    <label>
                                        Mode:
                                        <input type="text" className="inputfields" onChange={(e) => {setmode(e.target.value);}}/>
                                    </label><br/>
                                    <label>
                                    Start Date:
                                        <input type="date" className="inputfields" onChange={(e) => {setstartdate(e.target.value);}}/>
                                    </label><br/>
                                    <label>
                                    End Date:
                                        <input type="date" className="inputfields" onChange={(e) => {setenddate(e.target.value);}}/>
                                    </label><br/>
                                    <label>
                                    Description:
                                        <textarea className="inputfields" onChange={(e) => {setdescription(e.target.value);}}/>
                                    </label><br/>
                                    <label>
                                    Type:
                                        <select className="inputfields" onChange={(e) => {settype(e.target.value);}}>
                                            <option value="intercollege">intercollege</option>
                                            <option value="intracollege">intracollege</option>
                                        </select>
                                    </label>
                                    
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