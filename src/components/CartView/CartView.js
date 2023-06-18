import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import CartItem from "../CartItem/CartItem";
import { createOrderWithStockUpdate } from "../../services/firebase";
import Checkout from "../Checkout/Checkout";


const CartView = () => {
    const { cart, clearCart, getTotalPrice } = useContext(cartContext)
    const navigateTo = useNavigate()
    
    async function handleConfirm(userData){
        const order = {
            buyer: userData,
            items: cart,
            date: new Date(),
            price: getTotalPrice()
        };

        try{
            const id = await createOrderWithStockUpdate(order)
            console.log("respuesta: ", id)
            clearCart()
            navigateTo(`/order-confirmation/${id}`)
            // navigateTo(`/checkout/${id}/data`)
            /* 
            1. alert: SweetAlert/toastify -> muestren el id
            2. redirección: React Router -> /confirmation
            3. rendering condicional -> modificando un state
            */ 
        }catch(error){
            alert(error)
        }
    }


    return(
        <div>
            {cart.length ? 
                <>
                    {cart.map(item => <CartItem key={item.id} {...item} />)}
                    <br></br>
                    <h3>Total: $ {getTotalPrice()}</h3>
                    <Button onClick={() => clearCart()}>Vaciar Carrito</Button>
                    <br></br>
                    <Checkout onConfirm={handleConfirm}/>
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