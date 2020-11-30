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

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },

  grid: {
    flexGrow: 1
  },
  title: {
    marginBottom: '50px',
    textAlign: 'center'
  }
});

const Products = (props) => {
  const classes = useStyles();
  let activated = props.store.categories.filter(
    (category) => category.name === props.store.activeProduct
  );
  return (
    <section className={classes.grid}>
      <div className={classes.title}>
        <Typography variant='h3'>{activated[0].displayName}</Typography>
        <Typography variant='body1'>{activated[0].description}</Typography>
      </div>
      <Grid container spacing={3}>
        {props.store.products.map((product) => {
          if (product.category === props.store.activeProduct) {
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
                      <Typography gutterBottom variant='h5' component='h2'>
                        {product.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size='small' color='primary'>
                      Add To Cart
                    </Button>
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
  return { store: state.category };
};

export default connect(mapStateToProps)(Products);
