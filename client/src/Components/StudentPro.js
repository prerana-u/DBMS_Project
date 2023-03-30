import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';
import cardimg from './Images/fest1.png';

import './CSS/multicard.css';

const StudentPro = (props) => {
    return(
    <Card sx={{ maxWidth: "390px", height: "290px", backgroundColor: "white",MozBoxShadow:"0 0 5px #ccc",WebkitBoxShadow:"0 0 3px #ccc",boxShadow:"0 0 3px #ccc", marginTop: "5%",marginLeft: "2%"}} id="#card">
   <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={cardimg}
          alt="fest image"
          sx={{maxWidth: "390px",marginTop:"-8%"}}
        />
       
        <CardContent > 
          <Typography gutterBottom variant="h4">
           {props.name}
          </Typography>
          <Typography gutterBottom variant="body2" >
           {props.org}
          </Typography>
          <Typography variant="body1" >
            {props.start}
          </Typography>
        </CardContent>
    </CardActionArea>
  </Card>
    );
}
export default StudentPro;