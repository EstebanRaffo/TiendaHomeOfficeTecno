import React, { useState } from 'react';
import { Button } from '@mui/material';


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

export default function CheckoutForm({onConfirm}) {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    // adress: '',
    // city: '',
    // zipcode: '',
    // dni: '',
  });

  function onInputChange(evt) {
    //1. Que input se modifico
    const field = evt.target.name;
    const value = evt.target.value;

    //2. modificar el State
    //2.A Copiar el estate
    const newState = { ...userData };
    //2.B modificar la propiedad correspondiente
    newState[field] = value;

    //3. Set State
    setUserData(newState);
  }

  function clearData() {
    setUserData({
      name: '',
      email: '',
      phone: '',
      adress: '',
      city: '',
      zipcode: '',
    });
  }

  function onSubmit(evt) {
    evt.preventDefault();
    console.log('userData: ', userData);
    onConfirm(userData)
  }

  let arrayUserData = Object.keys(userData);

  return (
    <form onSubmit={onSubmit}>
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
  );
}


// const CheckoutForm = () => {
//   return (
//     <form>
//       <small>Completa tu compra</small>
//       <input placeholder="Nombre" />
//       <input placeholder="Email" />
//       <input placeholder="Teléfono" />
//     </form>
//   );
// };

// export default CheckoutForm;
