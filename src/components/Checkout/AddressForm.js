import * as React from 'react';
import { Button, Grid, Typography, TextField, FormControlLabel, Checkbox } from '@mui/material';

const labels = {
  name: 'Nombre',
  email: 'Email',
  phone: 'Teléfono'
}

function InputForm(props){
  const {name, value, onInputChange} = props
  return(
    <Grid item xs={12} sm={6}>
      <TextField
        required
        id={name}
        name={name}
        label={labels[name]}
        fullWidth
        variant="standard"
        value={value}
        onChange={onInputChange}
      />
    </Grid>
  )
}

export default function AddressForm({onInputChange, onClearData, userData}) {
  let arrayUserData = Object.keys(userData);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos de Envío
      </Typography>
      <Grid container spacing={3}>
        {arrayUserData.map((field) => (
          <InputForm 
            key={field}
            name={field}
            value={userData[field]}
            onInputChange={onInputChange}
          />
        ))}
        <Grid item xs={12}>
          <TextField
            required
            id="address2"
            name="address2"
            label="Domicilio"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="Ciudad"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="Provincia"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Código Postal"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="País"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Usar este domicilio para el Ticket"
          />
          <Button variant="contained" onClick={onClearData}>Limpiar Datos</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
