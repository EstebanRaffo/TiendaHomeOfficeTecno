import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link, useNavigate } from "react-router-dom";
import AutoGrid from "../AutoGrid/AutoGrid";
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartView = () => {
    const { cart, clearCart, getTotalPrice } = useContext(cartContext)
    const navigateTo = useNavigate()
    console.log("cart: ", cart)

    const styles = { textAlign: 'right', paddingRight: '20%', marginTop: '1%' }

    return(
        <div style={{textAlign: 'center', padding: '1%', backgroundColor: '#E0ECEA'}}>
            <>
                <h1>Mi Carrito</h1>
                <div style={styles}>
                    <Button color="error" variant="contained" onClick={() => clearCart()}>Vaciar Carrito <DeleteIcon /></Button>
                </div>
            </>
            {cart.length ? 
                <>
                    {cart.map(item => <AutoGrid key={item.id} {...item} />)}
                    <div style={styles}>
                        <h3>El total de tu compra es $ {getTotalPrice()}</h3>
                        <Button color="primary" variant="contained" onClick={() => navigateTo(`/checkout`)}>Continuar compra</Button>
                    </div>
                </>
                :
                <>
                    <h1>Tu carrito está vacío</h1>
                    <Link to='/'><Button variant="contained" size='large'>Ir al catálogo</Button></Link>
                </>
            }
        </div>
    )
}

export default CartView