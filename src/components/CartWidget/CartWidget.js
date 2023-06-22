import {useContext} from 'react';
import { Link } from "react-router-dom";
import { cartContext } from '../../context/cartContext';
import { Badge, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
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
  const { getTotalItems } = useContext(cartContext)

  return (
    <Link to='/cart'>
      <IconButton aria-label="cart">
        <StyledBadge badgeContent={ getTotalItems() } color="primary">
          <ShoppingCartIcon color='primary'/>
        </StyledBadge>
      </IconButton>
    </Link>
  );
}
