import Header from './components/header/header';
import Categories from './components/categories/categories.js';
import Products from './components/products/products';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    'margin-top': '100px'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
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
    </>
  );
}

export default App;
