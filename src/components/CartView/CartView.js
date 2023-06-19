import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link, useNavigate } from "react-router-dom";
import { createOrderWithStockUpdate } from "../../services/firebase";
import Checkout from "../Checkout/Checkout";
import AutoGrid from "../AutoGrid/AutoGrid";
import { Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartView = () => {
    const { cart, clearCart, getTotalPrice } = useContext(cartContext)
    const navigateTo = useNavigate()
    console.log("cart: ", cart)
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
        <div style={{textAlign: 'center', paddingTop: '2%', backgroundColor: '#E0ECEA'}}>
            <>
                <h1>Mi Carrito</h1>
            </>
            {cart.length ? 
                <>
                    {cart.map(item => <AutoGrid key={item.id} {...item} />)}
                    <br></br>
                    <Button color="error" variant="contained" onClick={() => clearCart()}>Vaciar Carrito <DeleteIcon /></Button>
                    <div style={{textAlign: 'right', paddingRight: '20%', marginTop: '3%'}}>
                        <h2>El total de tu compra es $ {getTotalPrice()}</h2>
                    </div>
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