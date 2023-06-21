import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { styled } from '@mui/material/styles';
import { Box, IconButton, Paper, Grid, Tooltip, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import CartItem from '../CartItem/CartItem';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.h5,
  padding: theme.spacing(2),
  textAlign: 'center',
}));

export default function AutoGrid(item) {
    const { removeItem, addItem } = useContext(cartContext)
    const {id, count, price, stock} = item
    const [newCount, setNewCount] = useState(count)

    function handleNewCount(){
        setNewCount(newCount)
        const newItem = {...item, count: newCount}
        addItem(newItem)
    }

    return (
        <Box sx={{ width: '90%', padding: '1%', justifyContent: 'center' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{justifyContent: 'center'}}>
                <Grid item xs="auto">
                    <CartItem {...item} />
                </Grid>
                <Grid item xs={2}>
                    <Item>
                        <Button
                            aria-label="reduce"
                            onClick={() => {
                                handleNewCount(Math.max(newCount - 1, newCount));
                            }}
                        >
                            <RemoveIcon fontSize="small" />
                        </Button>
                        {count}
                        <Button
                            aria-label="increase"
                            onClick={handleNewCount}
                            disabled={stock < count}
                        >
                            <AddIcon fontSize="small" />
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
