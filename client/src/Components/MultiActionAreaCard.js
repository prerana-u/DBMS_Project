import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import cardimg from './Images/fest1.png';

import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard(props) {

  return (
    <Card sx={{ maxWidth: 345 }} >
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={cardimg}
          alt="green iguana"
        />
       
        <CardContent > 
          <Typography gutterBottom variant="h5" component="div" >
           {props.fname}
          </Typography>
          <Typography variant="body2" color="text.secondary" >
            {props.fdesc}
          </Typography>
        </CardContent>
       
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Register
        </Button>
      </CardActions>
    </Card>
  );
}