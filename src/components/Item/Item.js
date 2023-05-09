import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';



export default function Item({id, title, img, price, stock}) {

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardHeader
        action={
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
          </CardActions>
        }
        title={title}
      />
      <CardMedia
        component="img"
        height="100"
        image={img}
        alt={title}
      />
      <CardContent>
        <Typography variant="body1" color="text.secondary">
          {price} 
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {stock} unidades
        </Typography>
        <Divider light />
        <Button variant="contained">Ver Producto</Button>
      </CardContent>
    </Card>
  );
}
