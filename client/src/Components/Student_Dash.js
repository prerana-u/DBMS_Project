import React from 'react';
import '../App.css';
import Verticalnav from  './VerticalNav';

import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react"; 


//import Preview from './component/preview_festcard';

import headimg from './Images/headimg.png';
//import Popup from 'reactjs-popup';
//import axios from 'axios';
//import {Carousel} from '@trendyol-js/react-carousel';

   

function Student_Dash(props) {
  
      const [sname, setSname]=useState("");
      const fetchdata = () => {
      
            axios.get("http://localhost:3001/studata", {
                
            }).then((response) => {
            sessionStorage.studentName=response.data[0].name;
            setSname(response.data[0].name);
            console.log(response);
            console.log(response.data);
        })
    };

    const [FestDets, setFestDets] = useState([]);
    useEffect(() => { 
        axios.get("http://localhost:3001/preview_fest", {
      
        }).then((response) => {
           setFestDets(response.data);
           console.log(response.data);
      })
    }, []);


 return (
    <div onLoad={fetchdata}>
    <Verticalnav role="student" />
      <div className="container">
         <div className="heading">
            <div className='headingcontent1'>
               <div className='headtext'>Welcome {sname}</div>
               <div className='headimg'><img src={headimg} alt="headimg"/></div>
            </div>
         </div>
        
        
      </div>
   </div>
   
 );
}

export default Student_Dash;