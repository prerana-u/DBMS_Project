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
         console.log(response);
         console.log(response.data);
    })
    };

    const [FestDets, setFestDets] = useState([]);
    const [UpFestDets, setUpFestDets] = useState([]);
    useEffect(() => { 
        axios.get("http://localhost:3001/preview_fest", {
      
        }).then((response) => {
           setFestDets(response.data);
           console.log(response.data);
      })
      axios.get("http://localhost:3001/upcoming_fest", {
      
        }).then((response) => {
            if(response.length>0)
            {
               setUpFestDets(response.data);
            }
           else{
            setUpFestDets([""]);
           }
           
           console.log(response.data);
      })
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
                onSwiper={(swiper) => console.log(swiper)}
            >
            {FestDets.map((val,key) => {
            return (
                <SwiperSlide key={key}><Preview name={val.fname} org={val.org} start={val.start} /></SwiperSlide>
                );
                })} 
            </Swiper> 
            </div>
         </div>
         <div className="view_previous_fest">
            <div className='fest-text'>View Upcoming Fests </div>
            <div className='fest-card'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {UpFestDets.map((val,key) => {
               console.log(UpFestDets.length);
               if(UpFestDets.length!==1)
               {
                  console.log(UpFestDets.length);
                  return (
                <SwiperSlide key={key}><Preview name={val.fname} org={val.org} start={val.start} /></SwiperSlide>
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
         <div className="view_previous_fest">
            <div className='fest-text'>View Previous Projects </div>
            <div className='fest-card'>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {FestDets.map((val,key) => {
            return (
                <SwiperSlide key={key}><Preview name={val.fname} org={val.org} start={val.start} /></SwiperSlide>
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
                onSwiper={(swiper) => console.log(swiper)}
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

export default TeachDash;