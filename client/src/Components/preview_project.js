import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions} from '@mui/material';

import cardimg from './Images/fest1.png';
import StuDataPopup from './StuDataPopup';
import './CSS/multicard.css';

const preview_project = (props) => {
    return(
    <Card sx={{ maxWidth: "390px", height: "360px", backgroundColor: "white",MozBoxShadow:"0 0 5px #ccc",WebkitBoxShadow:"0 0 3px #ccc",boxShadow:"0 0 3px #ccc", marginTop: "5%",marginLeft: "2%"}} id="#card">
   <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={cardimg}
          alt="fest image"
          sx={{maxWidth: "390px",marginTop:"-8%"}}
        />
       
        <CardContent  sx={{alignItems:"center",justifyContent:"center"}}> 
          <Typography gutterBottom variant="h4" sx={{color:'#196EDA',textAlign:'center',alignItems:'center', fontSize:'22px',fontFamily:'Gugi,cursive'}}>
           {props.name}
          </Typography>
          <Typography gutterBottom variant="body2" sx={{color:'#4c95f5',textAlign:'center',alignItems:'center', fontSize:'18px',fontFamily:'Gugi,cursive'}}>
           {props.org}
          </Typography>
          <Typography variant="body1" sx={{color:'#000',textAlign:'center',alignItems:'center', fontSize:'16px',fontFamily:'Gugi,cursive'}} >
            Start Date: {props.start}
          </Typography>
          <Typography variant="body1" sx={{color:'#000',textAlign:'center',alignItems:'center', fontSize:'16px',fontFamily:'Gugi,cursive'}} >
           Duration: {props.end}
          </Typography>
        </CardContent>
       
    </CardActionArea>
  </Card>
    );
}
export default preview_project;