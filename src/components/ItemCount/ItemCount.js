import * as React from 'react';
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Tooltip from '@mui/material/Tooltip';

export default function ItemCount({stock, initial, addToCart}) {
    const [count, setCount] = React.useState(1);
    let isDisabled = count === stock

    const handleAdd = () => {
        if(count < stock) setCount(count + 1);
    }

    return (
        <Box
            sx={{
            color: 'action.active',
            display: 'flex',
            flexDirection: 'column',
            '& > *': {
                marginBottom: 2,
            },
            '& .MuiBadge-root': {
                marginRight: 4,
            },
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
                    <Button onClick={() => addToCart(count)}>
                        <Tooltip title="Agregar al carrito">
                            <ShoppingCartIcon />
                        </Tooltip>
                    </Button>
                </ButtonGroup>
            </div>
        </Box>
    );
}
