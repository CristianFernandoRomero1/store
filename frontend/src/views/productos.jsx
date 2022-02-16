import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function Productos() {



  return (
    <Card sx={{ maxWidth: 250, maxHeight:300 }}>
      <CardHeader
   
  
        title="Raspberry pi"
       
      />
      <CardMedia
        component="img"
        height="110"
        image="https://th.bing.com/th/id/R.5ad1077cd511ef3f8e04286ec6593d38?rik=ozD%2fe0kfXYqKDA&pid=ImgRaw&r=0"
        alt="raspberry pi"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Mini ordenador útil en proyectos tecnológicos
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="add to cart">
          <AddShoppingCartIcon/>
        </IconButton>
   
      </CardActions>

    </Card>
  );
}

  