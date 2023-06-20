import * as React from 'react';
import { Button, Grid, Typography, TextField, FormControlLabel, Checkbox } from '@mui/material';

export default function AddressForm({onInputChange, onClearData, userData}) {
  let arrayUserData = Object.keys(userData);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Datos de Envío
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="name"
            name="name"
            label="Nombre"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={userData['name']}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phone"
            name="phone"
            label="Teléfono"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={userData['phone']}
            onChange={onInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            value={userData['email']}
            onChange={onInputChange}
          />
        </Grid>
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
