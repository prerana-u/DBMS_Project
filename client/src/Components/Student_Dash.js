import React from 'react';
import '../App.css';
import './CSS/studentdash.css';
import Verticalnav from  './VerticalNav';
import Preview from './StudentPro';
//import AddFest from './Addfest';
//import AddProj from './AddProj';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useNavigate } from "react-router-dom";
//import Preview from './component/preview_festcard';

import headimg from './Images/headimg_stu.png';
import skill from './Images/skill.png';
import ach from './Images/achievement.png';
import festspart from './Images/festspart.png';
import projectpart from './Images/projectpart.png';
//import { height } from '@mui/system';
//import Popup from 'reactjs-popup';
//import axios from 'axios';
//import {Carousel} from '@trendyol-js/react-carousel';

   

function Student_Dash() {
        const navigate=useNavigate();
        const [sname, setSname]=useState("");
        const [sclass, setSclass]=useState("");
        const[ssem,setSsem]=useState("");
        const [sdep, setSdep]=useState("");
        const [sregno, setSregno]=useState("");
        //const [props1,setSkill]=useState([]);
        var arr = [];
        var arr1 = [];
        var arr2 = [];
        const fetchdata = () => {
      
            axios.get("http://localhost:3001/studata", {
                
            }).then((response) => {
            sessionStorage.studentName=response.data[0].name;
            setSname(response.data[0].name);
            setSclass(response.data[0].class);
            setSsem(response.data[0].semester);
            setSdep(response.data[0].dep);
            setSregno(response.data[0].regno);
            //console.log(response);
            //console.log(response.data);
        })
        axios.get("http://localhost:3001/getskill", {
                
            }).then((response) => {
            //setSkill(response.data[0]);
            //console.log(response.data);
            //console.log(response.data[0].adv_skill1);
            if(response.data[0].adv_skill1!=='None' && response.data[0].adv_skill1!=='none')
            {
                console.log(response.data[0].adv_skill1);
                arr.push(response.data[0].adv_skill1);
            }
            if(response.data[0].adv_skill2!=='None' && response.data[0].adv_skill2!=='none')
            {
                arr.push(response.data[0].adv_skill2);
            }
            if(response.data[0].adv_skill3!=='None' && response.data[0].adv_skill3!=='none')
            {
                arr.push(response.data[0].adv_skill3);
            }
            if(response.data[0].int_skill1!=='None' && response.data[0].int_skill1!=='none')
            {
                arr1.push(response.data[0].int_skill1);
            }
            if(response.data[0].int_skill2!=='None' && response.data[0].int_skill2!=='none')
            {
                arr1.push(response.data[0].int_skill2);
            }
            if(response.data[0].int_skill3!=='None' && response.data[0].int_skill3!=='none')
            {
                arr1.push(response.data[0].int_skill3);
            }
            
            if(response.data[0].new_skill1!=='None' && response.data[0].new_skill1!=='none')
            {
                arr2.push(response.data[0].new_skill1);
            }
            if(response.data[0].new_skill2!=='None' && response.data[0].new_skill2!=='none')
            {
                arr2.push(response.data[0].new_skill2);
            }
            if(response.data[0].new_skill3!=='None' && response.data[0].new_skill3!=='none')
            {
                arr2.push(response.data[0].new_skill3);
            }
        })
        console.log(arr2);
    };
    const [FestDets, setFestDets] = useState([]);
    useEffect(() => { 
        axios.get("http://localhost:3001/preview_fest", {
      
        }).then((response) => {
           setFestDets(response.data);
           //console.log(response.data);
      })
    }, []);


 return (
   <div onLoad={fetchdata}>
    <Verticalnav/>
      <div className="container">
         <div className="heading_sd">
            <div className='headingcontent1'>
               <div className='headtext'>
                Welcome {sname}
                <p className='studets'>{ssem}{sclass}, Department of {sdep}</p>
                <p className='studets'>{sregno}</p>
               </div>
               
               <div className='headimg'><img src={headimg} alt="headimg"/></div>
            </div>
         </div>
         <div className="content1">
            <div className='content2'>
               <div className='card_sd'>
                    <div className='content'>
                        <div className='edit' onClick={()=>{ navigate('/skillform');}}><i className="fa-regular fa-pen-to-square fa-2xl" style={{color: "#196EDA"}}></i></div>
                       <div className='img'><img src={skill} alt="skill"/></div>
                       <div className='content-text'>
                        <label className='l1'> Your Skill Set 
                            <hr style={{width:"62%",marginTop:"2%",height:"3px",backgroundColor:'black'}}/></label>
                           <div className='skill'> 
                            <ol>
                                <li>Developed Skills:</li>
                                <ul type="disc">
                                {arr.map((val,key)=>{
			                        return(
				                            <li key={key}>{val}</li>
			                            );
		                        })}
                                </ul>
                                <li>Intermediate Skills:</li>
                                <ul type="disc">
                                {arr1.map((val,key)=>{
			                        return(
				                            <li key={key}>{val}</li>
			                            );
		                        })}
                                </ul>
                                <li>Interested Skills:</li>
                                <ul type="disc">
                                {arr2.map((val,key)=>{
			                        return(
				                            <li key={key}>{val}</li>
			                            );
		                        })}
                                </ul>
                            </ol></div>
                        </div>
                    </div>
               </div>
               <div className='card_sd2'>
                  <div className='content'>
                        <div className='edit'><i className="fa-regular fa-pen-to-square fa-2xl" style={{color: "#196EDA"}}></i></div>
                       <div className='img'><img src={ach} alt="skill" /></div>
                       <div className='content-text'>
                       <label className='l1'> Your Achievement
                            <hr style={{width:"83%",marginTop:"2%",height:"3px",backgroundColor:'black'}}/></label>
                            <div className='Achi'> 
                            <ol>
                                <li>Developed Skills:</li>
                                <ul type="disc">
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </ol>
                            </div>
                        </div>
                    </div></div>
            </div>
         </div>
        <div className="project_worked">
      
            <div className='text_data'>
                <div className='project_img'>
                <img src={projectpart} alt="skill" />
                </div>
                <div className='project_text'>
                    Projects Worked on 
                </div>
            </div>
            <div className='vl'></div>
            <div className='fest-card'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="swiper1"
                >
                    {FestDets.map((val,key) => {
                        return (
                            <SwiperSlide key={key}><Preview name={val.fname} org={val.org} start={val.start} /></SwiperSlide>
                        );
                    })} 
                </Swiper> 
            </div>
        </div>
        <div className="project_worked">
            <div className='text_data'>
                <div className='project_img'>
                <img src={festspart} alt="skill"/>
                </div>
                <div className='project_text'>
                Fests Participated In  
                </div>
            </div>
            <div className='vl'></div>
            <div className='fest-card'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="swiper1"
                >
                    {FestDets.map((val,key) => {
                        return (
                            <SwiperSlide key={key}><Preview name={val.fname} org={val.org} start={val.start} /></SwiperSlide>
                        );
                    })} 
                </Swiper> 
            </div>
        </div>
      </div>
   </div>
   
 );
}

export default Student_Dash;