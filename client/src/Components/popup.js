import React,{useState} from 'react';
import Popup from 'reactjs-popup';
import './CSS/popup.css';
import axios from 'axios';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
export default function Popup1() {
        const [name, setname] = useState("");
        const [org, setorg] = useState ("");
        const [mode, setmode] = useState("");
        const [startdate, setstartdate] = useState ("");
        const [enddate, setenddate] = useState("");
        const [description, setdescription] = useState ("");
        const [type, settype] = useState ("");
        const [DevSkills, setDevSkills] = useState([
            { event:'Enter Event'}
          ])
        
        const [isClicked, setIsClicked] = useState(1);
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
    }



  //functions
  const removeFields = (index) => {
    let data = [...DevSkills];
    data.splice(index, 1)
    setDevSkills(data)
    setIsClicked(isClicked-1)
    document.getElementById('alert1').style.display = 'none';
  }
  const addFields = (index) => {
    let data = [...DevSkills];
   
    data.splice(index, 1)
    if(isClicked>4)
    document.getElementById('alert').style.display = 'inline-block';
    else{
      let newfield = { skill:'Enter Skill'}

      setDevSkills([...DevSkills, newfield])
      setIsClicked(isClicked+1)
      console.log(isClicked)
    }
    
   
  }
  const handleFormChange = (index,event) => {
    let data = [...DevSkills];
    data[index][event.target.name] = event.target.value;
    setDevSkills(data);
   
    //console.log(DevSkills[index]);
  }
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
                                    <fieldset className='ffieldset'>
                                        <legend>Fest Details</legend>
                                   
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
                                            <option value="none"> None </option>
                                            <option value="intercollege">Intercollege</option>
                                            <option value="intracollege">Intracollege</option>
                                        </select>
                                    </label>
                                    </fieldset>
                                    <fieldset className='ffieldset event'>
                                        <legend>Event Details</legend>
                                    <br/>
                                    <div >
                                    {DevSkills.map((input, index) => {
                                        const label="Event Name "+(index+1).toString()

                                        return (
                                    <div style={{marginTop:'10px',float:'left'}} key={index}>
                                        <div style={{float:'left', width:'300px'}}>
                                        <label>{label}</label>
                                        <input type="text"  className="inputfields" onChange={(e) => {handleFormChange(index,e);}}/>
                                        </div>
                                        <div style={{ marginTop:'32px',marginLeft:'20px', float:'right'}}>
                                        <Button variant="outlined" onClick={(event) => addFields(index)} >+</Button>
                                        <Button variant="outlined"  onClick={() => removeFields(index)} style={{marginLeft:'20px'}}>-</Button>
                                        </div>

                                        </div>
                                        )
                                        })}
                                    </div>
                                    <br/>
                                    <div style={{width:'400px',height:'30px',display:'none',float:'left',marginTop:'20px', marginBottom:'20px'}} id="alert">
                                    <Alert severity="error">Max 5 Skills!</Alert>
                                    </div>
                                  
                                    </fieldset>
                                    <br/>
                                    <div >  
                                        <label>Upload a brochure as pdf/image:  </label>
                                        <input type="file" id="myfile" name="myfile" ></input>
                                        
                                    </div>
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