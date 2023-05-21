import ItemCount from '../ItemCount/ItemCount';
import {Card, Typography, Button, Divider, CardContent, CardActions, IconButton, Tooltip} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./styles/ItemDetail.css"
import Carousel from '../Carousel/Carousel';


const ItemDetail = ({images, category, title, description, price, stock}) => {
  
    return (
    <Card className="ItemDetail">
        <Carousel images={images} />
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
            <ItemCount stock={stock} initial={0}/>
            <Divider light />
            <Button variant="contained">Comprar</Button>
        </CardContent>
    </Card>
  );
};

export default ItemDetail;
