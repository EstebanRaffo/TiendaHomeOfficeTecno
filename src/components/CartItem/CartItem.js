import { useContext } from "react"  
import { cartContext } from "../../context/cartContext"
import { Button } from '@mui/material';


const CartItem = ({id, title, price, count}) => {

    const { removeItem } = useContext(cartContext)


    return(
        <>
            <div>
                <h5>{title}</h5>
                <h4>Precio: $ {price}</h4>
                <h4>Cantidad: {count}</h4>
            </div>
            <div>
                <Button onClick={() => removeItem(id)}>Eliminar</Button>
            </div>
        </>
    )
}

export default CartItem