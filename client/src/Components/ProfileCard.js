import * as React from 'react';
import './CSS/profilecard.css';
import { createClient } from "@supabase/supabase-js";
export default function ProfileCard(props) {
	var arr = [];
	if(props.advskill1!=='None' && props.advskill1!=='none')
	{
		arr.push(props.advskill1);
	}
	if(props.advskill2!=='None' && props.advskill2!=='none')
	{
		arr.push(props.advskill2);
	}
	if(props.advskill3!=='None' && props.advskill3!=='none')
	{
		arr.push(props.advskill3);
	}
	if(props.intskill1!=='None' && props.intskill1!=='none')
	{
		arr.push(props.intskill1);
	}
	if(props.intskill2!=='None' && props.intskill2!=='none')
	{
		arr.push(props.intskill2);
	}
	if(props.intskill3!=='None' && props.intskill3!=='none')
	{
		arr.push(props.intskill3);
	}
	
	if(props.newskill1!=='None' && props.newskill1!=='none')
	{
		arr.push(props.newskill1);
	}
	if(props.newskill2!=='None' && props.newskill2!=='none')
	{
		arr.push(props.newskill2);
	}
	if(props.newskill3!=='None' && props.newskill3!=='none')
	{
		arr.push(props.newskill3);
	}
	
	console.log(arr);

	const supabase = createClient("https://npropcvowslhzxxaigvi.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wcm9wY3Zvd3NsaHp4eGFpZ3ZpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTM5OTg3NywiZXhwIjoxOTk0OTc1ODc3fQ.iJ_vCpYUyRFEIP3ZgfYVZvXaQoAHLK7OtierGGpasOA");
	const { data, error } = supabase
	   .storage
	   .from('pictures')
	   .getPublicUrl('public/'+props.name+'.png')
	   console.log(data.publicUrl);

  return (
    <div className="card-container">
	
	<img className="round" src={data.publicUrl} alt="user" />
	<h3>{props.name}</h3>
	<h6>{props.semester} {props.sclass}</h6>
	<p>Department of {props.dep}</p>

	<div className="skills">
		<h6>Skills</h6>
		<ul>
			{arr.map((val,key)=>{
			return(
				<li key={key}>{val}</li>
			);
		})}
			
		</ul>
	</div>
    </div>
  );
}