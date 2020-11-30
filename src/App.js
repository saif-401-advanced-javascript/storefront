import Header from './components/header/header';
import Footer from './components/footer/footer';
import Categories from './components/categories/categories.js';
import Products from './components/products/products';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'margin-top': '100px'
  },
  sizing: {
    boxSizing: 'border-box',
    margin: 0,
    passing: 0
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.sizing}>
      <Header />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <Categories />
          </Grid>
          <Grid item xs={10}>
            <Products />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default App;
