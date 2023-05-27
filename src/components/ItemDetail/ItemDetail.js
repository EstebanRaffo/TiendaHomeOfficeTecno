import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Card, Typography, Button, CardContent, CardActions, IconButton, Tooltip} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import "./styles/ItemDetail.css"
import Carousel from '../Carousel/Carousel';
import { Link } from "react-router-dom";


const ItemDetail = ({images, category, title, description, price, stock}) => {
    const [quantityInCart, setQuantityInCart] = useState(0)

    const addToCart = (count) => {
        if(count > 0){
            alert(`Agregaste ${count} ${count > 1 ? "unidades" : "unidad"} al carrito`)
            setQuantityInCart(count)
        }
    }

    return (
    <Card className="ItemDetail">
        <Carousel images={images}/>
        <CardContent>
            <CardActions className="CardActions">
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
            </CardActions>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="h6">{category}</Typography>
            <Typography paragraph={true}>{description}</Typography>
            <Typography variant="body1" color="text.secondary">
                {`$ ${price}`} 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                {`${stock - quantityInCart} unidades disponibles`} 
            </Typography>
            {quantityInCart > 0 ? 
                <>
                    <hr></hr>
                    <Link to='/cart'><Button variant="contained" sx={{marginLeft: '40%'}}>Ir al carrito</Button></Link>
                </>    
                :
                <>
                    <ItemCount stock={stock} initial={0} addToCart={addToCart}/>
                    <hr></hr>
                    <Button variant="contained" size='large' sx={{marginLeft: '40%'}}>Comprar</Button>
                </>
            }
        </CardContent>
    </Card>
  );
};

export default ItemDetail;
