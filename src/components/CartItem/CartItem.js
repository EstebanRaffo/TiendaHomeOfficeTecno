import { useContext } from "react"  
import { cartContext } from "../../context/cartContext"
import { Button } from '@mui/material';


// export default function CartItem({id, title, price, count}){
//     const { removeItem } = useContext(cartContext)

//     return(
//         <>
//             <div>
//                 <h5>{title}</h5>
//                 <h4>Precio: $ {price}</h4>
//                 <h4>Cantidad: {count}</h4>
//                 <h4>Subtotal: {(price * count).toFixed(2)}</h4>
//             </div>
//             <div>
//                 <Button onClick={() => removeItem(id)}>Eliminar</Button>
//             </div>
//         </>
//     )
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function CartItem({id, title, price, count, images}) {
    const { removeItem } = useContext(cartContext)
    return (
    <Paper
        sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}
    >
        <Grid container spacing={2}>
        <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={images} />
            </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                    {title}
                </Typography>
            </Grid>
            <Grid item>
                <Button sx={{ cursor: 'pointer' }} variant="body2" onClick={() => removeItem(id)}>
                    Eliminar
                </Button>
            </Grid>
            </Grid>
            <Grid item>
            <Typography variant="subtitle1" component="div">
                {price}
            </Typography>
            </Grid>
        </Grid>
        </Grid>
    </Paper>
    );
}
