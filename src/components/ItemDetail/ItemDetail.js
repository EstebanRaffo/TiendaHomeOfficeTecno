import ItemCount from '../ItemCount/ItemCount';
import {Card, CardMedia, Typography, Button, Divider, CardContent, CardActions, IconButton, Tooltip} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./styles/ItemDetail.css"
// import Carousel from '../Carousel/Carousel';


const ItemDetail = ({id, images, category, title, description, price, stock}) => {
  
    console.log(images)
    return (
    <Card className="ItemDetail">
        {/* <Carousel images={images} /> */}
        <CardMedia component="img" height="100" image={images} alt={title} />
        <CardContent>
            <CardActions className="CardActions">
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
                {`${stock} unidades disponibles`} 
            </Typography>
            <ItemCount stock={5} initial={0}/>
            <Divider light />
            <Button variant="contained">Comprar</Button>
        </CardContent>
    </Card>
  );
};

export default ItemDetail;
