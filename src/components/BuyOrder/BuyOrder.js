import { useParams, Link } from "react-router-dom"
import { Typography, Paper, Container, Button, Divider } from '@mui/material';
import SuccessIcon from "../Checkout/SuccessIcon";


export default function BuyOrder(){
    const { orderId } = useParams()
    const stylesDivider = { margin: '2%' }

    return (
        <Container component="main" width="100%" sx={{ mb: 4, margin: '7% 0'}}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, textAlign: 'center' }}>
                <Typography component="h1" variant="h3">
                    Gracias por tu compra!
                </Typography>            
                <Divider variant="middle" sx={stylesDivider}/>    
                <Typography variant="h5">
                    El número de tu orden es {orderId}.
                </Typography>
                <Divider variant="middle" sx={stylesDivider}/>    
                <SuccessIcon/>
                <Divider variant="middle" sx={stylesDivider}/>    
                <Link to='/'><Button variant="contained" size='large'>Seguir Comprando</Button></Link>
            </Paper>
        </Container>
    );
}