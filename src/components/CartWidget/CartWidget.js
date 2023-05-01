import cart from './assets/add-to-cart.png'


const CartWidget = () => {
    return(
        <div>
            <img src={cart} alt="cart-widget" width={70} />
            0
        </div>
    )
}

export default CartWidget