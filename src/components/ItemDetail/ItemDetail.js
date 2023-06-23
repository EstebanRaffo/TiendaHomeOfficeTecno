import { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import { cartContext } from '../../context/cartContext';
import ItemCount from '../ItemCount/ItemCount';
import Carousel from '../Carousel/Carousel';
import "./styles/ItemDetail.css"
import {Card, Typography, Button, CardContent, CardActions, IconButton, Tooltip, Rating, Box} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import swal from 'sweetalert'


const ItemDetail = ({id, images, category, title, description, price, stock}) => {
    const [quantityInCart, setQuantityInCart] = useState(0)
    const {addItem} = useContext(cartContext)
    const [rating, setRating] = useState(2)
    const product_existing = images && category && title && description && price && stock

    const addToCart = (count) => {
        if(count > 0){
            swal("Bien hecho!", `Agregaste ${count} ${count > 1 ? "unidades" : "unidad"} al carrito`, "success")
            setQuantityInCart(count)
            const item = {id, images, category, title, description, price, stock, count}
            addItem(item)
        }
    }

    if(!product_existing){
        return(
            <Box sx={{ width: '100%', padding: '1%', textAlign: 'center', margin: '10% 0' }}>
                <h1 style={{marginBottom: '1.5%'}}>No se encontró el Producto</h1>
                <Link to='/'><Button variant="contained" size='large' sx={{marginTop: '1%'}}>Ir al catálogo</Button></Link>
            </Box>
        )
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
                <Rating
                    name="simple-controlled"
                    value={rating}
                    onChange={(event, newValue) => {
                        setRating(newValue);
                    }}
                />
                <Typography variant="h6" sx={{color: '#0C47A3'}}>{category}</Typography>
                <Typography paragraph={true} sx={{margin: '5% 3%'}}>{description}</Typography>
                <Typography variant="h3" sx={{color: '#9bd4d1'}}>{`$ ${price}`}</Typography>
                {stock ? 
                    <Typography variant="subtitle1" sx={{margin: '2%', color: '#0F9403'}}>
                        {`${stock - quantityInCart} unidades disponibles`} 
                    </Typography>
                    :
                    <Typography variant="subtitle1" sx={{margin: '2%', color: '#0F9403'}}>
                        Producto sin stock
                    </Typography>
                }
                <hr></hr>
                <CardActions className="CardActionsBuy">
                    {quantityInCart > 0 ? 
                        <>
                            <Link to='/cart'><Button variant="contained" size='large'>Ir al carrito</Button></Link>
                        </>    
                        :
                        <>
                            {stock ?
                                <>
                                    <ItemCount stock={stock} initial={0} addToCart={addToCart}/>
                                    <Button variant="contained" size='large'>Comprar Ahora</Button>
                                </> 
                            :
                                <Link to={`/category/${category}`}>
                                    <Button variant="contained" size='large' sx={{marginTop: '1%'}}>
                                        Ver productos similares
                                    </Button>
                                </Link>
                            }
                        </>
                    }
                </CardActions>
            </CardContent>
        </Card>
    );
};

export default ItemDetail;
