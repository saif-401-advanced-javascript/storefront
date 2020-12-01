/* eslint-disable react-hooks/exhaustive-deps */
import { connect } from 'react-redux';
// import { activate } from '../../store/state';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { activate, getCategories } from '../../reducers/actions';
import { useEffect } from 'react';

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
  useEffect(() => {
    props.getCategories();
  }, []);

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
        {props.categories.map((category) => {
          return (
            <ListItem
              button
              key={category.name}
              onClick={() => props.activate(category.name)}
            >
              <ListItemText primary={category.name.toUpperCase()} />
            </ListItem>
          );
        })}
      </List>
    </section>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories.categories
  };
};

const mapDispatchToProps = { activate, getCategories };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
