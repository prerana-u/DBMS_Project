import * as React from 'react';
import './CSS/skillform.css';
import DevelopedSkills from './AdvancedSkills';
import IntermediateSkills from './IntermediateSkills';
import NewSkills from './NewSkills';
import { Button } from '@mui/material';
import Axios from 'axios';
import { useState } from 'react';
//import ValidationTextFields from './ValidationTextFields';


export default function SkillForm() 
{
  const [AdvSkills, setAdvSkills] = useState([])
  const [intSkills, setintSkills] = useState([])
  const [BaseSkills, setBaseSkills] = useState([])
  const sendData = (DevSkills) =>
   {
     setAdvSkills(DevSkills);
     console.log(AdvSkills);
   };
   const sendData1= (DevSkills) => 
   {
    setintSkills(DevSkills);
    console.log(intSkills);
    };

    const sendData2 = (DevSkills) => 
    {

      setBaseSkills(DevSkills);
      console.log(BaseSkills);

    };
  const SendSkills=()=>
  {
    var askill1='None',askill2='None',askill3='None',iskill1='None',iskill2='None',iskill3='None',bskill1='None',bskill2='None',bskill3='None';
    if(AdvSkills.length===1)
    {
      askill1=AdvSkills[0].skill;
    }
    else if(AdvSkills.length===2)
    {
      askill1=AdvSkills[0].skill;
      askill2=AdvSkills[1].skill;
    }
    else if(AdvSkills.length===3)
    {
      askill1=AdvSkills[0].skill;
      askill2=AdvSkills[1].skill;
      askill3=AdvSkills[2].skill;
    }
    if(intSkills.length===1)
    {
      iskill1=intSkills[0].skill;
    }
    else if(intSkills.length===2)
    {
      iskill1=intSkills[0].skill;
      iskill2=intSkills[1].skill;
    }
    else if(intSkills.length===3)
    {
      iskill1=intSkills[0].skill;
      iskill2=intSkills[1].skill;
      iskill3=intSkills[2].skill;
    }
    if(BaseSkills.length===1)
    {
      bskill1=BaseSkills[0].skill;
    }
    else if(BaseSkills.length===2)
    {
      bskill1=BaseSkills[0].skill;
      bskill2=BaseSkills[1].skill;
    }
    else if(BaseSkills.length===3)
    {
      bskill1=BaseSkills[0].skill;
      bskill2=BaseSkills[1].skill;
      bskill3=BaseSkills[2].skill;
    }
    Axios.post("http://localhost:3001/setskills", {
      advskill1:askill1,
      advskill2:askill2,
      advskill3:askill3,
      intskill1:iskill1,
      intskill2:iskill2,
      intskill3:iskill3,
      newskill1:bskill1,
      newskill2:bskill2,
      newskill3:bskill3,
     }).then((response) => {
        console.log(response);
     });
  }

  return (
    <div id="sf">
    <h2>Skill Updation Form</h2>
    <h3>Enter your Skills below</h3>
    <div style={{height:'fit-content',overflow: 'hidden',marginBottom:'40px'}}>
    <DevelopedSkills sendData={sendData}/>
    </div>
    <div style={{height:'fit-content',overflow: 'hidden',marginBottom:'40px'}}>
    <IntermediateSkills sendData={sendData1}/>
    </div>
    <div style={{height:'fit-content',overflow: 'hidden',marginBottom:'40px'}}>
    <NewSkills sendData={sendData2}/>
    </div>
    <Button variant="contained" onClick={SendSkills}>Submit</Button>
    </div>
    
  );
  
}
