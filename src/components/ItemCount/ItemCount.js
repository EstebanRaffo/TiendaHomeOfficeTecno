import { useState } from 'react';
import {Box, Badge, ButtonGroup, Button, Tooltip} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function ItemCount({stock, initial, addToCart}) {
    const [count, setCount] = useState(1);
    let isDisabled = count === stock

    const handleAdd = () => {
        if(count < stock) setCount(count + 1);
    }

    return (
        <Box
            sx={{
            color: 'action.active',
            display: 'flex',
            '& .MuiBadge-root': {
                marginRight: 4,
            }
            }}
        >
            <div>
                <Badge color="success" badgeContent={count} overlap='circular'></Badge>
                <ButtonGroup>
                    <Button
                        aria-label="reduce"
                        onClick={() => {
                            setCount(Math.max(count - 1, initial));
                        }}
                    >
                        <RemoveIcon fontSize="small" />
                    </Button>
                    <Button
                        aria-label="increase"
                        onClick={handleAdd}
                        disabled={isDisabled}
                    >
                        <AddIcon fontSize="small" />
                    </Button>
                    <Button onClick={() => addToCart(count)} disabled={count < 1}>
                        <Tooltip title="Agregar al carrito">
                            <ShoppingCartIcon />
                        </Tooltip>
                    </Button>
                </ButtonGroup>
            </div>
        </Box>
    );
}
