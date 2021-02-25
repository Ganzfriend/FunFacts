import React, {useState, useEffect} from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styles from './styles.js';

const useStyles = makeStyles(styles);

const Home = ({setClicked}) => {
  const classes = useStyles();

  return (
    <div className={classes.home}>
      <Typography variant="h1" gutterBottom> co_1409 f@Ct$ </Typography>
      <Button onClick={() => setClicked(true)} variant="contained">
        Let's Play!
      </Button>
    </div>
  );
};

export default Home;