import { useContext } from "react";
import CartItem from '../CartItem/CartItem';
import { cartContext } from "../../context/cartContext";
import { Box, IconButton, Paper, Grid, Tooltip, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h5,
  padding: theme.spacing(1),
  textAlign: 'center',
}));

export default function AutoGrid(item) {
    const { removeItem, updateCountItemCart } = useContext(cartContext)
    const {id, count, price, stock} = item

    function handleSubtract(){
        updateCountItemCart(id, -1)
    }

    function handleAdd(){
        updateCountItemCart(id, 1)
    }

    return (
        <Box sx={{ width: '87%', padding: '1%', justifyContent: 'center' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{justifyContent: 'center'}}>
                <Grid item xs="auto">
                    <CartItem {...item} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Button
                            aria-label="reduce"
                            onClick={handleSubtract}
                            disabled={count < 2}
                        >
                            <RemoveIcon fontSize="medium" />
                        </Button>
                        {count}
                        <Button
                            aria-label="increase"
                            onClick={handleAdd}
                            disabled={stock < count}
                        >
                            <AddIcon fontSize="medium" />
                        </Button>
                    </Item>
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
