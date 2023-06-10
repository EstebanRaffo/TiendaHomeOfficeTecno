import { createContext, useState } from "react";

export const cartContext = createContext({cart: []})

export const CartContextProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log("Items en el carrito: ", cart)
    
    const getTotalPrice = () => {
        return cart.reduce((acumulador, item) => { return acumulador + item.count * item.price }, 0)
    }

    const addItem = (item) => {
        let newCart = [...cart]

        if(isInCart(item.id)){
            let positionInCart = getItemIndex(item.id)
            newCart[positionInCart].count += item.count
            newCart[positionInCart].stock -= item.count  
        }else{
            newCart.push(item)
        }
        setCart(newCart)
    }

    const isInCart = (idSearch) => {
        return cart.some(item => item.id === idSearch)
    }

    const getItemIndex = (id) => {
        return cart.findIndex((item) => item.id === id)
    }

    const removeItem = (idDelete) => {
        setCart(cart.filter((item) => item.id !== idDelete));
    }

    const clearCart = () => {
        setCart([])
    }

    const getTotalItems = () => {
        let total = 0;
        cart.forEach((item) => {
          total += item.count;
        });
        return total;
    }

    return(
        <cartContext.Provider value={{cart, addItem, removeItem, getTotalItems, getTotalPrice, clearCart}}>
            {children}
        </cartContext.Provider>
    )
}