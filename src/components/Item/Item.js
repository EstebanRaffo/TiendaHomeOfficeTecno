import * as React from 'react';
import {Card, CardHeader, CardMedia, Typography, Button, IconButton, Tooltip} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from "react-router-dom";

import './styles/Item.css';

export default function Item({id, title, image, price}) {

  return (
    <Card className='ItemCard'>
      <CardHeader
        action={
            <IconButton aria-label="add to favorites">
              <Tooltip title="Agregar a favoritos">
                <FavoriteIcon />
              </Tooltip>
            </IconButton>
        }
      />
      <CardMedia
        component="img"
        height="45%"
        image={image}
        alt={title}
        sx={{padding: '5%'}}
      />
      <Typography variant="h6" sx={{paddingLeft: '3%', paddingRight: '3%'}}>{title}</Typography>
      <Typography variant="inherit" sx={{color: '#9bd4d1', fontSize: '1.75rem'}}>{`$ ${price}`}</Typography>
      <hr></hr>
      <Link to={`/product/${id}`}>
        <Button variant="contained" size='large'>Ver Producto</Button>
      </Link>
    </Card>
  );
}
