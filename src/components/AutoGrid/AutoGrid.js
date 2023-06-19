import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { styled } from '@mui/material/styles';
import {Box, IconButton, Paper, Grid, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CartItem from '../CartItem/CartItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h5,
  padding: theme.spacing(2),
  textAlign: 'center',
}));

export default function AutoGrid(item) {
    const { removeItem } = useContext(cartContext)
    const {id, count, price} = item

  return (
    <Box sx={{ width: '100%', paddingTop: '2%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{justifyContent: 'center'}}>
            <Grid item xs="auto">
                <CartItem {...item} />
            </Grid>
            <Grid item xs={2}>
                <Item>{count}</Item>
            </Grid>
            <Grid item xs={2}>
                <Item>$ {count * price}</Item>
            </Grid>
            <Grid item xs={1}>
                <IconButton aria-label="delete" color="error" onClick={() => removeItem(id)}>
                    <Tooltip title="Eliminar">
                        <DeleteIcon />
                    </Tooltip>
                </IconButton>
            </Grid>
        </Grid>
    </Box>
  );
}
