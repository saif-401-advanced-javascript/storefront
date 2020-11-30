import { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClearIcon from '@material-ui/icons/Clear';
import { connect } from 'react-redux';
import { deleteFromCart } from '../../reducers/actions';

const useStyles = makeStyles({
  root: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

const Header = (props) => {
  let numberOfProducts = props.cart.cartList.reduce((acc, product) => {
    return acc + product.count;
  }, 0);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl, setAnchorEl] = useState(null);
  const classes = useStyles();
  return (
    <AppBar position='static' className={classes.root}>
      <Toolbar className={classes.flex}>
        <Typography variant='h6'>Store</Typography>
        <Button
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
        >
          Cart ({numberOfProducts})
        </Button>
        <Menu
          id='simple-menu'
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {props.cart.cartList.map((product) => {
            return (
              <div className={classes.flex}>
                <MenuItem key={product.name}>{product.name}</MenuItem>
                <Typography variant='p'>{product.count}</Typography>
                <Button onClick={() => props.deleteFromCart(product.name)}>
                  <ClearIcon color='secondary' fontSize='small' />
                </Button>
              </div>
            );
          })}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = { deleteFromCart };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
