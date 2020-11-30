import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    left: 0,
    bottom: 0,
    right: 0
  },
  padding: {
    padding: '0 10px'
  }
});

export default function Footer() {
  const classes = useStyles();
  return (
    <AppBar position='relative' className={classes.root}>
      <Toolbar>
        <Typography variant='h6'>
          Made By
          <Button
            href='https://github.com/saif-401-advanced-javascript/storefront'
            target='_blank'
          >
            <GitHubIcon className={classes.padding} fontSize='default' />
          </Button>
          &copy; 2020
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
