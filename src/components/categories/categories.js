import { connect } from 'react-redux';
// import { activate } from '../../store/state';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { activate } from '../../reducers/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

const Categories = (props) => {
  // console.log(props);
  const classes = useStyles();
  return (
    <section>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' id='nested-list-subheader'>
            Categories
          </ListSubheader>
        }
        className={classes.root}
      >
        {props.categories.categories.map((category) => {
          return (
            <ListItem
              button
              key={category.name}
              onClick={() => props.activate(category.name)}
            >
              <ListItemText primary={category.displayName} />
            </ListItem>
          );
        })}
      </List>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  };
};

const mapDispatchToProps = { activate };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
