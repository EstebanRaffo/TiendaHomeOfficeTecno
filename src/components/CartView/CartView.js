import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router-dom";
import { Button } from '@mui/material';
import CartItem from "../CartItem/CartItem";



const CartView = () => {

    const { cart, clearCart, getTotalPrice } = useContext(cartContext)
    
    if(!cart.length){
        return(
            <div>
                <h1>Tu carrito está vacío</h1>
                <Link to='/'><Button variant="contained" size='large'>Ir al catálogo</Button></Link>
            </div>
        )
    }

    return(
        <div>
            <ol>
                { cart.map(item => <CartItem key={item.id} {...item} />) }
            </ol>
            <br></br>
            <h3>Total: ${getTotalPrice()}</h3>
            <Button onClick={() => clearCart()}>Vaciar Carrito</Button>
            <br></br>
            <Button variant="contained" size='large'>Comprar Carrito</Button>
        </div>
    )
}

export default CartView