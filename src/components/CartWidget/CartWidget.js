import {useContext} from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { cartContext } from '../../context/cartContext';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 20,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function CartWidget() {
  const { getTotalItems } = useContext(cartContext)

  return (
    <IconButton aria-label="cart">
      <StyledBadge badgeContent={ getTotalItems() } color="primary">
        <ShoppingCartIcon color='primary'/>
      </StyledBadge>
    </IconButton>
  );
}
