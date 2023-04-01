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
import nodataicon from "./Images/Circle.json";
import lottie from "lottie-web";
import nodatafound from './Images/nodatafound.png';

function Student_Dash() {
        const navigate=useNavigate();
        const [sname, setSname]=useState("");
        const [sclass, setSclass]=useState("");
        const[ssem,setSsem]=useState("");
        const [sdep, setSdep]=useState("");
        const [FestDets, setFestDets] = useState([]);
        const [sregno, setSregno]=useState("");
        const [adv_skills, setAdv_skills] = useState([]);
        const [int_skills, setInt_skills] = useState([]);
        const [new_skills, setNew_skills] = useState([]);
        //const [props1,setSkill]=useState([]);
        var arr = [];
        var arr1 = [];
        var arr2 = [];


        const fetchdata = () => {
         
            arr=[];
            arr1=[];
            arr2=[];
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
        axios.get("http://localhost:3001/getskill_studentdash", {
                    
        }).then((response) => {
        //setSkill(response.data[0]);
        //console.log(response.data);
        //console.log(response.data[0].adv_skill1);
        if(response.data[0].adv_skill1!=='None' && response.data[0].adv_skill1!=='none')
        {
            //console.log(response.data[0].adv_skill1);
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
        setAdv_skills(arr);
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
        setInt_skills(arr1);
        if(response.data[0].newskill1!=='None' && response.data[0].newskill1!=='none')
        {
            arr2.push(response.data[0].newskill1);
        }
        if(response.data[0].newskill2!=='None' && response.data[0].newskill2!=='none')
        {
            arr2.push(response.data[0].newskill2);
        }
        if(response.data[0].newskill3!=='None' && response.data[0].newskill3!=='none')
        {
            arr2.push(response.data[0].newskill3);
        }
        setNew_skills(arr2);
    })
    console.log(int_skills);
    console.log(adv_skills);
    console.log(new_skills);

       
       // console.log(arr2);
        axios.get("http://localhost:3001/get_reg_fest", {
            params: { regno:sessionStorage.getItem('regno') }
        }).then((response) => {
            if(response.data.length>0)
            {
               setFestDets(response.data);
              // console.log(FestDets);
            }
           else{
              setFestDets(["No Data"]);
             // console.log(FestDets);
           }
           //console.log(response.data);
      })
    };

  

    useEffect(() => {
        fetchdata();
        lottie.loadAnimation({
          container: document.querySelector("#react-logo"),
          animationData: nodataicon,
          loop:false,
        });
        lottie.loadAnimation({
            container: document.querySelector("#react-logo1"),
            animationData: nodataicon,
            loop:false,
          });
          
         
      }, []);

    


 return (
   <div >
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
         <div className="main_content">
            <div className='content_buttons'>
               <div className='card_sd'>
                    <div className='content' style={{display: "flex", flexDirection:"column", alignItems:"center"}}>
                        <div className='edit' onClick={()=>{ navigate('/skillform');}}><i className="fa-regular fa-pen-to-square fa-2xl" style={{color: "#196EDA",marginTop:'30px'}}></i></div>
                       <div className='img'><img src={skill} alt="skill"/></div>
                       <div className="content-text">
                       <label className='l1'> Your Skill Set 
                            <hr style={{width:"100%",marginTop:"2%",height:"3px",backgroundColor:'black'}}/>    
                        </label>
                        </div>
                       <div className='content-text'>
                        
                           <div className='skill'> 
                           <div style={{padding:'10px',height:'fit-content',overflow:'hidden',width:'400px'}}>
                            <div style={{float:'left',alignItems:'center',padding:'5px',width:'150px'}}>Developed Skills: </div>
                            <div style={{width:'100%'}}>
                                     <ul type="disc">
                                        
                                        {adv_skills.map((val,key)=>{
                                            
                                            return(
                                                    <li key={key}>{val}</li>
                                                );
                                        })}
                                        </ul>
                            </div>
                           
                           </div>
                           
                           <div style={{padding:'10px',height:'fit-content',overflow:'hidden',width:'400px'}}>
                            <div style={{float:'left',alignItems:'center',padding:'5px',width:'150px'}}>Intermediate Skills: </div>
                            <div style={{}}>
                                     <ul type="disc">
                                        
                                        {int_skills.map((val,key)=>{
                                            
                                            return(
                                                    <li key={key}>{val}</li>
                                                );
                                        })}
                                        </ul>
                            </div>
                           
                           </div>
                           <div style={{padding:'10px',height:'fit-content',overflow:'hidden',width:'400px'}}>
                            <div style={{float:'left',alignItems:'center',padding:'5px',width:'150px'}}>Interested Skills: </div>
                            <div style={{}}>
                                     <ul type="disc">
                                        
                                        {new_skills.map((val,key)=>{
                                            
                                            return(
                                                    <li key={key}>{val}</li>
                                                );
                                        })}
                                        </ul>
                            </div>
                          
                           </div>
                            </div>
                          
                        </div>
                    </div>
               </div>
               <div className='card_sd2' style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                  <div className='content'>
                        <div className='edit'><i className="fa-regular fa-pen-to-square fa-2xl" style={{color: "#196EDA"}}></i></div>
                       <img src={ach} alt="skill" />
                       <div className='content-text'>
                       <label className='l1'> Your Achievement
                            <hr style={{width:"102%",marginTop:"2%",height:"3px",backgroundColor:'black'}}/>
                        </label>
                        <div id="react-logo" style={{ width: '200px', height: '200px', marginLeft:'40px' }}/>
                        </div>
                    </div></div>
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
                          if(FestDets[0]!=="No Data")
                          {
                          
                             return (
                           <SwiperSlide key={key}><Preview name={val.fname} org={val.org} start={val.start} end={val.end} /></SwiperSlide>
                           );
                          }
                          else{
                             
                             return(
                                <div key={key} >
                                <div id="react-logo3"  style={{marginTop:'-350px', marginLeft:'100px'}}>
                                    <img style={{ width: '400px', height: '350px' }} src={nodatafound} alt="no data"></img>
                                    </div>    
                              
                                </div>
                               
                             )
                          }
                            })} 
                </Swiper> 
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
            <div id="react-logo1" style={{ width: 350, height: 350, marginLeft:'100px' }}/>
              {/*}  <Swiper
                    spaceBetween={50}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    className="swiper1"
                >
                    {FestDets.map((val,key) => {
                        return (
                            <SwiperSlide key={key}><Preview name={val.fname} org={val.fdesc} start={val.start} /></SwiperSlide>
                        );
                    })} 
                </Swiper> */}
            </div>
        </div>
        
      </div>
   </div>
   
 );
}

export default Student_Dash;