import * as React from 'react';
import {Card, CardHeader, CardMedia, Typography, Button, Divider, CardContent, CardActions, IconButton, Tooltip} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

import './styles/Item.css';

export default function Item({id, title, image, price}) {

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
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {`$ ${price}`} 
        </Typography>
        <Divider light />
        <Link to={`/product/${id}`}>
          <Button variant="contained">Ver Producto</Button>
        </Link>
      </CardContent>
    </Card>
  );
}
