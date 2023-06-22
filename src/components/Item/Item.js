import * as React from 'react';
import { Link } from "react-router-dom";
import {Card, CardHeader, CardMedia, Typography, Button, IconButton, Tooltip, CardActions} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import './styles/Item.css';

function CardDescription({ price, discount, category }) {
  return (
    <div className="item-card_detail">
      <small style={{color: '#0E4293'}}>{category}</small>
      <br></br>
      {discount && <small style={{color: '#20930E'}}>Descuento: {discount} % </small>}
      {discount > 20 && <small style={{ color: "green" }}>Ofertón!</small>}
      {discount > 20 && price < 26000 && (
        <small style={{ color: "red" }}> Super Ofertón!</small>
      )}
    </div>
  );
}

export default function Item({id, title, image, price, discount, category}) {
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
      <CardDescription discount={discount} price={price} category={category} />
      <Typography variant="inherit" sx={{color: '#9bd4d1', fontSize: '1.75rem'}}>{`$ ${price}`}</Typography>
      <CardActions className='CardActionsItem'>
        <Link to={`/product/${id}`}>
          <Button variant="contained" size='large'>Ver Producto</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
