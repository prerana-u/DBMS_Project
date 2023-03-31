import '../App.css';
import dp from './Images/cuate.png';
import wave from './Images/Vector.png';
import Axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from 'react';
import MultiActionAreaCard from './MultiActionAreaCard';
function Homepage() {
  const [NoOfSlides,setNoOfSlides] = useState(3);
  const [FestDets, setFestDets] = useState([]);
  const [ProjDets, setProjDets] = useState([]);
  const fetchdata = () => {
  Axios.get("http://localhost:3001/festdata", {

  }).then((response) => {
    
     setFestDets(response.data);
     if(FestDets.length===2)
     {
      setNoOfSlides(2);
     }
     else if(FestDets.length===1)
     {
      setNoOfSlides(1);
     }
     else if(FestDets.length===0)
     {
        setNoOfSlides(0);
     }
     else
     setNoOfSlides(3);
  })
  Axios.get("http://localhost:3001/projdata", {
  
}).then((response) => {
   
   setProjDets(response.data);
   
})
  };



 
  return (
    <div id="a"  onLoad={fetchdata}>

      <img src={dp} alt="food bowl" id="bowl"/>
  
    <div id="d1">
        <h1>SKILLFORD</h1>
        <h2>Talent Recognition Platform </h2>
  
    </div>
    <img src={wave} id="wave" alt="wave"/>
    <h3 id="uftext">Upcoming Fests</h3>
    <div id="uf">
    <Swiper
                spaceBetween={50}
                slidesPerView={NoOfSlides}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {FestDets.map((val,key) => {
            return (
                <SwiperSlide key={key}><MultiActionAreaCard fid={val.fid} fname={val.fname} fdesc={val.fdesc} /></SwiperSlide>
                );
                })} 
            </Swiper> 
    </div>
  {/*}  <h3 id="uptext">Upcoming Projects</h3>
    <div id="up">
    <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {ProjDets.map((val,key) => {
            return (
              
                <SwiperSlide key={key}> <MultiActionAreaCard fname={val.pname} fdesc={val.skill1}/></SwiperSlide>
            );
                })} 
            </Swiper> 
              </div>-->*/}
    </div>
  );
}

export default Homepage;
