import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link, useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import CartItem from "../CartItem/CartItem";
import { createOrderWithStockUpdate } from "../../services/firebase";


const CartView = () => {
    const { cart, clearCart, getTotalPrice } = useContext(cartContext)
    const navigateTo = useNavigate()
    
    async function handleConfirm(){
        const order = {
            items: cart,
            buyer: {
                name: "Esteban Raffo",
                email: "e.fraffo@gmail.com"
            },
            date: new Date(),
            price: getTotalPrice()
        };

        try{
            const id = await createOrderWithStockUpdate(order)
            console.log("respuesta: ", id)
            clearCart()
            navigateTo(`/order-confirmation/${id}`)
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
            <ol>
                {cart.length ? 
                    cart.map(item => <CartItem key={item.id} {...item} />) 
                    :
                    <>
                        <h1>Tu carrito está vacío</h1>
                        <Link to='/'><Button variant="contained" size='large'>Ir al catálogo</Button></Link>
                    </>
                }
            </ol>
            <br></br>
            <h3>Total: $ {getTotalPrice()}</h3>
            <Button onClick={() => clearCart()}>Vaciar Carrito</Button>
            <br></br>
            <Button variant="contained" size='large' onClick={handleConfirm}>Comprar Carrito</Button>
        </div>
    )
}

export default CartView