import React from 'react';
import '../App.css';
import Verticalnav from  './VerticalNav';
import Preview from './preview_festcard';
import PreviewProj from './PreviewProject';
import PreviewUpcoming from './PreviewUpcoming';
import AddFest from './Addfest';
import AddProj from './AddProj';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination } from "swiper";
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
           console.log(FestDets);
         }
        else{
           setFestDets(["No Data"]);
          // console.log(FestDets);
        }
         //console.log(response.data);
      });
      lottie.loadAnimation({
         container: document.getElementById("react-logo"),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         // animationData: // local json file,
         path: 'https://assets5.lottiefiles.com/packages/lf20_mxuufmel.json',
       });
       lottie.loadAnimation({
         container: document.getElementById("react-logo1"),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         // animationData: // local json file,
         path: 'https://assets5.lottiefiles.com/packages/lf20_mxuufmel.json',
       });
       lottie.loadAnimation({
         container: document.getElementById("react-logo2"),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         // animationData: // local json file,
         path: 'https://assets5.lottiefiles.com/packages/lf20_mxuufmel.json',
       });
       lottie.loadAnimation({
         container: document.getElementById("react-logo3"),
         renderer: 'svg',
         loop: false,
         autoplay: true,
         // animationData: // local json file,
         path: 'https://assets5.lottiefiles.com/packages/lf20_mxuufmel.json',
       });
   
    },[]);

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
 
  },[]);

  
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
     console.log(FestDets);
   }
    //console.log(response.data);
 })

   },[]);

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
         <div className="main_content">
            <div className='content_buttons'>
               <div className='card1'><AddFest /></div>
               <div className='card2'><AddProj/></div>
            </div>
         </div>
         <div className="view_previous_fest">
            <div className='fest-text'>View Previous Fests </div>
            <div className='fest-card'>
            <Swiper
               modules={[Keyboard, Navigation, Pagination]}
                spaceBetween={50}
                centeredSlides={false}
                slidesPerView={3}
                navigation={true}
                    pagination={{
                      clickable: true,
                    }}
                    keyboard={{
                        enabled: true,
                      }}
                      breakpoints={{
                        769: {
                          slidesPerView: 3,
                          slidesPerGroup: 2,
                        },
                      }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper1"
            >
            {FestDets.map((val,key) => {
              // console.log(FestDets[0]);
              if(FestDets[0]!=="No Data")
              {
              
                 return (
               <SwiperSlide key={key}><Preview name={val.fname} org={val.org} start={val.start} end={val.end} fid={val.fid}/></SwiperSlide>
               );
              }
              else{
                 
                 return(
                  <div id="react-logo" key={key} style={{ width: 350, height: 350, marginLeft:'35%',marginTop:'-350px' }} />
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
                 modules={[Keyboard, Navigation, Pagination]}
                 spaceBetween={50}
                 centeredSlides={false}
                 slidesPerView={3}
                 navigation={true}
                     pagination={{
                       clickable: true,
                     }}
                     keyboard={{
                         enabled: true,
                       }}
                       breakpoints={{
                         769: {
                           slidesPerView: 3,
                           slidesPerGroup: 2,
                         },
                       }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="swiper1"
            >
            {UpFestDets.map((val,key) => {
              
               if(UpFestDets[0]!=="No Data")
               {
                 
                  return (
                <SwiperSlide key={key}><Preview name={val.fname} org={val.org} start={val.start} end={val.end} fid={val.fid}/></SwiperSlide>
                );
               }
               else{
                  
                  return(
                     
                     <div id="react-logo1" key={key} style={{ width: 350, height: 350, marginLeft:'35%',marginTop:'-350px' }} />
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
            if(ProjDets[0]!=="No Data")
         {
         
            return (
          <SwiperSlide key={key}><PreviewProj pid={val.pid} name={val.pname} org={val.skill1} start={val.start} end={val.duration+" Month(s)"}/></SwiperSlide>
          );
         }
         else{
            
            return(
             <div id="react-logo2" key={key} style={{ width: 350, height: 350, marginLeft:'35%',marginTop:'-350px' }} />
            )
         }
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
            if(UpProjDets[0]!=="No Data")
            {
            
               return (
             <SwiperSlide key={key}><PreviewUpcoming pid={val.pid} name={val.pname} org={val.skill1} start={val.start} end={val.duration+" Month(s)"} /></SwiperSlide>
             );
            }
            else{
               
               return(
                <div id="react-logo3" key={key} style={{ width: 350, height: 350, marginLeft:'35%',marginTop:'-350px' }} />
               )
            }
              })} 
            </Swiper> 
            </div>
         </div>
      </div>
   </div>
   
 );
}

export default TeachDash;