import * as React from 'react';
import {Card, CardHeader, CardMedia, Typography, Button, IconButton, Tooltip, CardActions} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from "react-router-dom";

import './styles/Item.css';

export default function Item({id, title, image, price}) {

  return (
    <Card className='ItemCard'>
      <CardHeader
        action={
          <>
            <IconButton aria-label="share">
              <Tooltip title="Compartir">
                  <ShareIcon />
              </Tooltip>
            </IconButton>
            <IconButton aria-label="add to favorites">
              <Tooltip title="Agregar a favoritos">
                <FavoriteIcon />
              </Tooltip>
            </IconButton>
          </>
        }
      />
      <CardMedia
        component="img"
        image={image}
        alt={title}
      />
      <Typography variant="h6" sx={{paddingLeft: '3%', paddingRight: '3%'}}>{title}</Typography>
      <Typography variant="inherit" sx={{color: '#9bd4d1', fontSize: '1.75rem'}}>{`$ ${price}`}</Typography>
      <CardActions className='CardActionsItem'>
        <Link to={`/product/${id}`}>
          <Button variant="contained" size='large'>Ver Producto</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
