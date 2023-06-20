import { useParams, Link } from "react-router-dom"
import { Typography, Paper, Container, Button } from '@mui/material';


export default function BuyOrder(){
    const { orderId } = useParams()
    
    return (
        <Container component="main" width="100%" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 }, textAlign: 'center' }}>
                <Typography component="h1" variant="h4">
                    Gracias por tu compra!
                </Typography>                            
                <Typography variant="subtitle1">
                    El número de tu orden es {orderId}.
                </Typography>
                <Link to='/'><Button variant="contained" size='large'>Seguir Comprando</Button></Link>
            </Paper>
        </Container>
    );
}