/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { addToCart, getProducts } from '../../reducers/actions';
import { useState, useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  grid: {
    flexGrow: 1
  },
  title: {
    marginBottom: '50px',
    textAlign: 'center'
  },
  snackBar: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2)
    }
  }
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Products = (props) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    props.getProducts();
  }, []);

  const addItem = (name) => {
    props.addToCart(name);
    let item = props.products.filter((product) => product.name === name)[0];
    if (item.inStock > 0) {
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const classes = useStyles();
  // let activated = props.categories.categories.filter(
  //   (category) => category.name === props.categories.activeProduct
  // );
  // console.log(activated);
  return (
    <section className={classes.grid}>
      <div className={classes.title}>
        {/* <Typography variant='h3'>{activated[0].displayName}</Typography>
        <Typography variant='body1'>{activated[0].description}</Typography> */}
      </div>
      <Grid container spacing={3}>
        {props.products.map((product) => {
          if (product.category === props.categories.activeProduct) {
            return (
              <Grid item xs={3}>
                <Card className={classes.root}>
                  <CardActionArea>
                    <CardMedia
                      component='img'
                      alt='Contemplative Reptile'
                      height='140'
                      image={product.image}
                      title={product.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant='h4' component='h4'>
                        {product.name}
                      </Typography>
                      <Typography gutterBottom variant='h5' component='h5'>
                        In Stock : {product.inStock}
                      </Typography>
                      <Typography gutterBottom variant='h5' component='h5'>
                        Price : {product.price} JD
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size='small'
                      color='primary'
                      onClick={() => addItem(product.name)}
                    >
                      Add To Cart
                    </Button>
                    <Snackbar
                      open={open}
                      autoHideDuration={1000}
                      onClose={handleClose}
                    >
                      <Alert onClose={handleClose} severity='success'>
                        Added to cart successfully
                      </Alert>
                    </Snackbar>
                    <Button size='small' color='primary'>
                      View Details
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          }
        })}
      </Grid>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
    products: state.products.products
  };
};

const mapDispatchToProps = { addToCart, getProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
