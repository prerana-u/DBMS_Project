import React, {  useState, useEffect } from 'react';
import './CSS/search.css';
import Axios from 'axios';
import Verticalnav from  './VerticalNav';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ProfileCard from './ProfileCard';
import headimg from './Images/headimg.png';
import { Box } from '@mui/system';

function SearchBar() {
  
  const [skills, setSkills] = useState("");
  const [resLength, setResLength] = useState(0);
  const [profileData, setProfileData]= useState([]);
  useEffect(() => {
    console.log(profileData);
    setResLength(profileData.length);
 }, [profileData]);
  const fetchdata = () => {
  
    Axios.get("http://localhost:3001/getskills", {
      params: { skill:skills }

    }).then((response) => {
        console.log(response.data);
       
      setProfileData(response.data);
      console.log(profileData);
    })

    };

  const clearInput = () => {
    document.getElementById('input-with-icon-adornment').value="";

  }
  const defaultInput=()=>{
    var s=document.getElementById('input-with-icon-adornment').value;
    if(s==="")
    document.getElementById('input-with-icon-adornment').value="Search for a Skill or a Student..";
    else
    console.log(skills);

  }
     return(
    
      <div className='main'>
      <Verticalnav/>
      <div className="container">
      <div className="heading">
            <div className='headingcontent1'>
               <div className='headtext'>Welcome vasav</div>
               <div className='headimg'><img src={headimg} alt="headimg"/></div>
            </div>
      </div>

      <div>
      <div style={{float:'left', marginLeft:'200px'}}>
      <Input
          id="input-with-icon-adornment"
          className="searchBar"
          defaultValue="Search for a Skill or a Student.."
          onChange={(e) =>{
            setSkills(e.target.value);
         }}
          onFocus={clearInput}
          onBlur={defaultInput}
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon id='sicon'/>
            </InputAdornment>
          }
        />
        
      </div>
      <div style={{float:'right',marginTop:'50px',marginLeft:'30px'}}>
      <Button variant="contained" id="searchbtn" onClick={()=>fetchdata()}>Search</Button>
      </div>
      </div>
      <Box sx={{ flexGrow: 1 }}>
      <div className='resultGrid'>
      <Grid container spacing={{ xs: 2, md: 6}} columns={{ xs: 4, sm: 8, md: 12 }}>
      {profileData.map((val,key) => {
         return (
          <Grid item xs={2} sm={4} md={4} key={key} display="flex" justifyContent="center" alignItems="center">
           
              <ProfileCard name={val.name} sclass={val.class} semester={val.semester} dep={val.dep} advskill1={val.adv_skill1} advskill2={val.adv_skill2} advskill3={val.adv_skill3} intskill1={val.int_skill1} intskill3={val.int_skill3} intskill2={val.int_skill2} newskill1={val.newskill1} newskill2={val.newskill2} newskill3={val.newskill3}/>
              
          </Grid>
          );
         })}
      </Grid>
      
      </div>
      </Box>
        
      </div>
      </div>
        

     );

}

export default SearchBar;