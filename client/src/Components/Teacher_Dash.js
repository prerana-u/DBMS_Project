import React from 'react';
import '../App.css';
import Verticalnav from  './VerticalNav';
import Preview from './preview_festcard';
import AddFest from './Addfest';
import AddProj from './AddProj';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
//import Preview from './component/preview_festcard';
import nodataicon from "./Images/Circle.json";
import lottie from "lottie-web";
import headimg from './Images/headimg.png';
//import Popup from 'reactjs-popup';
//import axios from 'axios';
//import {Carousel} from '@trendyol-js/react-carousel';

   

function TeachDash(props) {
  
      const [tname, setTName]=useState('');

      const fetchdata = () => {
      axios.get("http://localhost:3001/teachdata", {
    
      }).then((response) => {
         sessionStorage.teacherName=response.data[0].name;
     
         setTName(response.data[0].name);
     
    })
    };

    const [FestDets, setFestDets] = useState([]);
    const [UpFestDets, setUpFestDets] = useState([]);
    const [ProjDets, setProjDets] = useState([]);
    const [UpProjDets, setUpProjDets] = useState([]);

    useEffect(() => { 
        axios.get("http://localhost:3001/preview_fest", {
       params:{tid:sessionStorage.getItem("tid")}
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
   
    }, [FestDets]);

    useEffect(() => { 
      axios.get("http://localhost:3001/upcoming_fest", {
         params:{tid:sessionStorage.getItem("tid")}
        }).then((response) => {
            if(response.data.length>0)
            {
               setUpFestDets(response.data);
            }
           else{
              setUpFestDets(["No Data"]);
           }
           
          // console.log(response.data);
      })
 
  }, [UpFestDets]);

  
  useEffect(() => { 
   axios.get("http://localhost:3001/preview_proj", {
  params:{tid:sessionStorage.getItem("tid")}
   }).then((response) => {
    if(response.data.length>0)
    {
       setProjDets(response.data);
      
    }
   else{
      setProjDets(["No Data"]);
     // console.log(FestDets);
   }
    //console.log(response.data);
 })

   }, [ProjDets]);

   useEffect(() => { 
      axios.get("http://localhost:3001/upcoming_proj", {
     params:{tid:sessionStorage.getItem("tid")}
      }).then((response) => {
       if(response.data.length>0)
       {
          setUpProjDets(response.data);
         
       }
      else{
         setUpProjDets(["No Data"]);
        // console.log(FestDets);
      }
       //console.log(response.data);
    })
   
      }, [UpProjDets]);

    useEffect(() => {
   
      lottie.loadAnimation({
          container: document.querySelector("#react-logo1"),
          animationData: nodataicon,
        });
    }, []);

 return (
    <div onLoad={fetchdata}>
    <Verticalnav role="teacher" cpage="dashboard"/>
      <div className="container">
         <div className="heading">
            <div className='headingcontent1'>
               <div className='headtext'>Welcome {tname}</div>
               <div className='headimg'><img src={headimg} alt="headimg"/></div>
            </div>
         </div>
         <div className="content1">
            <div className='content2'>
               <div className='card1'><AddFest /></div>
               <div className='card2'><AddProj/></div>
            </div>
         </div>
         <div className="view_previous_fest">
            <div className='fest-text'>View Previous Fests </div>
            <div className='fest-card'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={()=>{}}
                className="swiper1"
            >
            {FestDets.map((val,key) => {
              // console.log(FestDets[0]);
              if(FestDets[0]!=="No Data")
              {
              
                 return (
               <SwiperSlide key={key}><Preview name={val.fname} org={val.org} start={val.start} end={val.end} /></SwiperSlide>
               );
              }
              else{
                 
                 return(
                    <p>No Data Found</p>
                 )
              }
                })} 
            </Swiper> 
            </div>
         </div>
         <br></br>
         <div className="view_previous_fest">
            <div className='fest-text'>View Upcoming Fests </div>
            <div className='fest-card'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={() => {}}
                className="swiper1"
            >
            {UpFestDets.map((val,key) => {
              
               if(UpFestDets[0]!=="No Data")
               {
                 
                  return (
                <SwiperSlide key={key}><Preview name={val.fname} org={val.org} start={val.start} end={val.end} /></SwiperSlide>
                );
               }
               else{
                  
                  return(
                     
                     <div id="react-logo1" style={{ width: 350, height: 350, marginLeft:'35%',marginTop:'-350px' }} />
                  )
               }
                })}
            </Swiper> 
            </div>
         </div>
         <div className="view_previous_fest">
            <div className='fest-text'>View Previous Projects </div>
            <div className='fest-card'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={() => {}}
                className="swiper1"
            >
            {ProjDets.map((val,key) => {
            return (
                <SwiperSlide key={key}><Preview name={val.pname} org={val.skill1} start={val.start} /></SwiperSlide>
                );
                })} 
            </Swiper> 
            </div>
         </div>
         <div className="view_previous_fest">
            <div className='fest-text'>View Upcoming Projects </div>
            <div className='fest-card'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={() => {}}
                className="swiper1"
            >
            {UpProjDets.map((val,key) => {
            return (
                <SwiperSlide key={key}><Preview name={val.pname} org={val.skill1} start={val.start}/></SwiperSlide>
                );
                })} 
            </Swiper> 
            </div>
         </div>
      </div>
   </div>
   
 );
}

export default TeachDash;