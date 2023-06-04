import { useContext } from "react"
import { cartContext } from "../../context/cartContext"



const CartView = () => {

    const { cart, removeItem, clearCart, getTotalPrice } = useContext(cartContext)
    
}

export default CartView