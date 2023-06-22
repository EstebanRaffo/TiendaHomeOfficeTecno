import { Fragment, useContext } from 'react';
import { cartContext } from "../../context/cartContext";
import { Typography, List, ListItem, ListItemText, Grid } from '@mui/material';

const addresses = ['Maipú 1500', 'piso 17', 'Buenos Aires', 'Argentina'];
const payments = [
  { name: 'Tarjeta', detail: 'Visa' },
  { name: 'Titular' },
  { name: 'Número', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Vencimiento', detail: '04/2024' },
];

export default function Review({name}) {
  const { cart, getTotalPrice } = useContext(cartContext)

  return (
    <Fragment>
      <Typography variant="h6" gutterBottom sx={{textAlign: 'center'}}>
        Ticket
      </Typography>
      <List disablePadding>
        {cart.map((item) => (
          <ListItem key={item.id} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={`${item.title}(${item.count})`} secondary={item.desc} />
            <Typography variant="body2">$ {item.price*item.count}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            $ {getTotalPrice()}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Envío
          </Typography>
          <Typography gutterBottom>{name}</Typography>
          <Typography gutterBottom>{addresses.join(', ')}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Detalles del Pago
          </Typography>
          <Grid container>
            {payments.map((payment) => (
              <Fragment key={payment.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  {payment.name === 'Titular' ? 
                      <Typography gutterBottom>{name}</Typography>
                      :
                      <Typography gutterBottom>{payment.detail}</Typography>
                  }
                </Grid>
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
