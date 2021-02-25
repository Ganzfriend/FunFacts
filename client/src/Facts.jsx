import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Typography, Card} from '@material-ui/core';
import styles from './styles.js';

const useStyles = makeStyles(styles);

const Facts = ({random}) => {
  const classes = useStyles();

  return (
    <Card className={classes.facts}>
    {
      random.map((fact, i) => (
        <Typography
          key={i}
          className={classes.fact}
          gutterBottom
          variant="h6"
        >
          {i+1}. {fact}
        </Typography>
      ))
    }
    </Card>
  );
};

export default Facts;