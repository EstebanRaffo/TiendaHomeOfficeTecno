import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CartItem from '../CartItem/CartItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function AutoGrid(item) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
            <CartItem {...item} />
        </Grid>
        <Grid item xs>
          <Item>{item.count}</Item>
        </Grid>
        <Grid item xs>
          <Item>{item.count * item.price}</Item>
        </Grid>
      </Grid>
    </Box>
  );
}