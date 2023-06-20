import { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import {Card, Typography, Button, CardContent, CardActions, IconButton, Tooltip} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import "./styles/ItemDetail.css"
import Carousel from '../Carousel/Carousel';
import { Link } from "react-router-dom";
import { cartContext } from '../../context/cartContext';


const ItemDetail = ({id, images, category, title, description, price, stock}) => {
    const [quantityInCart, setQuantityInCart] = useState(0)
    const {addItem} = useContext(cartContext)

    const addToCart = (count) => {
        if(count > 0){
            alert(`Agregaste ${count} ${count > 1 ? "unidades" : "unidad"} al carrito`)
            setQuantityInCart(count)
            const item = {id, images, category, title, description, price, stock, count}
            addItem(item)
        }
    }

    return (
    <Card className="ItemDetail">
        <Carousel images={images}/>
        <CardContent>
            <CardActions className="CardActionsUser">
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
            <Typography variant="h5" sx={{color: '#9bd4d1', fontSize: '1.75rem'}}>
                {`$ ${price}`} 
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
                {`${stock - quantityInCart} unidades disponibles`} 
            </Typography>
            <hr></hr>
            <CardActions className="CardActionsBuy">
                {quantityInCart > 0 ? 
                    <>
                        <Link to='/cart'><Button variant="contained" size='large'>Ir al carrito</Button></Link>
                    </>    
                    :
                    <>
                        <ItemCount stock={stock} initial={0} addToCart={addToCart}/>
                        <Button variant="contained" size='large'>Comprar Ahora</Button>
                    </>
                }
            </CardActions>
        </CardContent>
    </Card>
  );
};

export default ItemDetail;
