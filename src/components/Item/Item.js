import * as React from 'react';
import {Card, CardHeader, CardMedia, Typography, Button, Divider, CardContent, CardActions, IconButton, Tooltip} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

import './styles/Item.css';

export default function Item({title, images, price, stock}) {

  return (
    <Card sx={{ maxWidth: 300 }} className='ItemCard'>
      <CardHeader
        action={
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Tooltip title="Agregar a favoritos">
                <FavoriteIcon />
              </Tooltip>
            </IconButton>
          </CardActions>
        }
      />
      <CardMedia
        component="img"
        height="100"
        image={images}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {`$ ${price}`} 
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {`${stock} unidades disponibles`}
        </Typography>
        <Divider light />
        <Button variant="contained">Ver Producto</Button>
      </CardContent>
    </Card>
  );
}
