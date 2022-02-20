import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Productos() {



  return (
    <Container  maxWidth="12">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 15 }}>
          {Array.from(Array(12)).map((_, index) => (
            <Grid item xs={2} sm={4} md={3} key={index}>

              <Card sx={{ maxWidth: 250, maxHeight: 400 }}>
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
                    <AddShoppingCartIcon />
                  </IconButton>
                  <IconButton aria-label="buy">
                    <AttachMoneyIcon />
                    <Button>Comprar</Button>
                  </IconButton>

                </CardActions>

              </Card>


            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>






  );
}

