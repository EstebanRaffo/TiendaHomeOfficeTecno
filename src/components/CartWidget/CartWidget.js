// import cart from './assets/add-to-cart.png'
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
// import Button from '@mui/material/Button';

// const CartWidget = () => {

//     const styles = {
//         width: '70px'
//     }

//     return(
//         <Button>
//             <ShoppingCartIcon />
//             0
//         </Button>
//     )
// }

import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 20,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget() {
  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={1} color="primary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
