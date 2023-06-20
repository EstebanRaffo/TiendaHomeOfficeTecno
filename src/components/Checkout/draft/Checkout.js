import { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { Button } from '@mui/material';
import { createOrderWithStockUpdate } from "../../../services/firebase";
import { cartContext } from "../../../context/cartContext";


function InputForm(props) {
  return (
    <div style={{ display: 'flex', marginBottom: 8 }}>
      <label style={{ width: '100px', marginRight: 4 }}>{props.label}</label>
      <input
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}
      />
    </div>
  );
}

export default function CheckoutForm() {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    // adress: '',
    // city: '',
    // zipcode: '',
    // dni: '',
  });

  const { cart, clearCart, getTotalPrice } = useContext(cartContext)
  const navigateTo = useNavigate()


  function onInputChange(evt) {
    const field = evt.target.name;
    const value = evt.target.value;

    const newState = { ...userData };
    newState[field] = value;
    setUserData(newState);
  }

  function clearData() {
    setUserData({
      name: '',
      email: '',
      phone: '',
      // adress: '',
      // city: '',
      // zipcode: '',
    });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onConfirm(userData)
  }

  async function onConfirm(userData){
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
        /* 
        1. alert: SweetAlert/toastify -> muestren el id
        2. redirección: React Router -> /confirmation
        3. rendering condicional -> modificando un state
        */ 
    }catch(error){
        alert(error)
    }
  }

  let arrayUserData = Object.keys(userData);

  return (
    <div style={{backgroundColor: '#E0ECEA'}}>
      <form onSubmit={handleSubmit}>
        <h1>Ingresa tus datos para completar la compra 🛍</h1>
        {arrayUserData.map((field) => (
          <InputForm
            key={field}
            name={field}
            value={userData[field]}
            onInputChange={onInputChange}
            label={field}
          />
        ))}
        <button onClick={clearData}>Limpiar Datos</button>
        <Button variant="contained" size='large' type='submit' disabled={
          !(
            userData.name !== '' &&
            userData.phone !== '' &&
            userData.email !== ''
            )
          }>Comprar Carrito</Button>
      </form>
    </div>
  );
}