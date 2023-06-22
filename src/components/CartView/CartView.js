import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AutoGrid from "../AutoGrid/AutoGrid";
import { cartContext } from "../../context/cartContext";
import { Button, Divider, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartView(){
    const { cart, clearCart, getTotalPrice } = useContext(cartContext)
    const navigateTo = useNavigate()

    const styles = { textAlign: 'right', paddingRight: '20%', marginTop: '1%' }
    const stylesDivider = { margin: '2%' }

    return(
        <Box sx={{textAlign: 'center', padding: '1%', backgroundColor: '#E0ECEA'}}>
            <>
                <h1 style={{color: '#0485C1'}}>Mi Carrito</h1>
            </>
            {cart.length ? 
                <>
                    <Box sx={styles}>
                        <Button color="error" variant="contained" onClick={() => clearCart()}>Vaciar Carrito <DeleteIcon /></Button>
                        <Divider variant="middle" sx={{margin: '0.5%'}}/>    
                    </Box>
                    {cart.map(item => <AutoGrid key={item.id} {...item} />)}
                    <Divider variant="middle" sx={stylesDivider}/>
                    <Box sx={styles}>
                        <h3>El total de tu compra es $ {getTotalPrice()}</h3>
                        <Divider variant="middle" sx={stylesDivider}/>    
                        <Button color="primary" variant="contained" onClick={() => navigateTo(`/checkout`)}
                            sx={{padding: '1.2%'}}>Continuar compra</Button>
                        <Divider variant="middle" sx={stylesDivider}/>    
                    </Box>
                </>
                :
                <Box sx={{ width: '100%', padding: '1%', textAlign: 'center', margin: '10% 0' }}>
                    <h1 style={{marginBottom: '1.5%'}}>Tu carrito está vacío</h1>
                    <Link to='/'><Button variant="contained" size='large' sx={{marginTop: '1%'}}>Ir al catálogo</Button></Link>
                </Box>
            }
        </Box>
    )
}