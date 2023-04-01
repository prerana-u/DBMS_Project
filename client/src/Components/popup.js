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
        const [events1,setEvents1]=useState("None");
        const [events2,setEvents2]=useState("None");
        const [events3,setEvents3]=useState("None");
        const [events4,setEvents4]=useState("None");
        const [events5,setEvents5]=useState("None");
        
    

        const popupform = (e) => {
           
            if(startdate < enddate)
        { 
           axios.post("http://localhost:3001/multicard", {
             name: name,
             organization: org,
             mode_1: mode,
             startdate_1 : startdate,
             enddate_1: enddate,
             Description: description,
             Type: type,
           
             event1:events1,
             event2:events2,
             event3:events3,
             event4:events4,
             event5:events5,
             tid:sessionStorage.getItem("tid"),
        

            }).then((response) => {
               console.log(response);
        });
    }
    else{
        alert("Check the date input properly");
    }
    }



  //functions
//   const removeFields = (index) => {
//     let data = [...EventNames];
//     data.splice(index, 1)
//     setEventNames(data)
//     setIsClicked(isClicked-1)
//     document.getElementById('alert1').style.display = 'none';
//   }
//   const addFields = (index) => {
//     let data = [...EventNames];
   
//     data.splice(index, 1)
//     if(isClicked>4)
//     document.getElementById('alert').style.display = 'inline-block';
//     else{
//       let newfield = { events:'None'}

//       setEventNames([...EventNames, newfield])
//       setIsClicked(isClicked+1)
//       console.log(isClicked)
//     }
    
   
//   }
//   const handleFormChange = (index,event) => {
//     let data = [...EventNames];
//     data[index][event.target.name] = event.target.value;
    
//     setEventNames(data);
   
//     console.log(EventNames);
    
//   }

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
                                        <input type="text" className="inputfields" onChange={(e) => {setname(e.target.value);}} required/>
                                    </label><br/>
                                    <label>
                                        Organization:
                                        <input type="text" className="inputfields" onChange={(e) => {setorg(e.target.value);}} required/>
                                    </label><br/>
                                    <label>
                                        Mode:
                                        <input type="text" className="inputfields" onChange={(e) => {setmode(e.target.value);}} required/>
                                    </label><br/>
                                    <label>
                                    Start Date:
                                        <input type="date" className="inputfields" onChange={(e) => {setstartdate(e.target.value);}} required/>
                                    </label><br/>
                                    <label>
                                    End Date:
                                        <input type="date" className="inputfields" onChange={(e) => {setenddate(e.target.value);}} required/>
                                    </label><br/>
                                    <label>
                                    Description:
                                        <textarea className="inputfields" onChange={(e) => {setdescription(e.target.value);}} required/>
                                    </label><br/>
                                    <label>
                                    Type:
                                        <select className="inputfields" onChange={(e) => {settype(e.target.value);}} required>
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
                                    <label>Event 1</label>
                                    <input type="text"  className="inputfields"  id="events1" name="events" onChange={(e) => {setEvents1(e.target.value);} } />
                                    <label>Event 2</label>
                                    <input type="text"  className="inputfields"  id="events2" name="events" onChange={(e) => {setEvents2(e.target.value);}}/>
                                    <label>Event 3</label>
                                    <input type="text"  className="inputfields"  id="events3" name="events" onChange={(e) => {setEvents3(e.target.value);}}/>
                                    <label>Event 4</label>
                                    <input type="text"  className="inputfields"  id="events4" name="events" onChange={(e) => {setEvents4(e.target.value);}}/>
                                    <label>Event 5</label>
                                    <input type="text"  className="inputfields"  id="events5" name="events" onChange={(e) => {setEvents5(e.target.value);}} />
                                   
                                    </div>
                                    <br/>
                                
                                  
                                    </fieldset>
                                    <br/>
                                    <div >  
                                        <label>Upload a brochure as pdf/image:  </label>
                                        <input type="file" id="myfile" name="myfile" ></input>
                                        
                                    </div>
                                    <input type="submit" value="Submit" onClick={(e)=>{popupform(e)}}/>
                                </form>
                            </div>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
};