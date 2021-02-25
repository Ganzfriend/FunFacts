import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Typography, Card} from '@material-ui/core';
import styles from './styles.js';

const useStyles = makeStyles(styles);

const Facts = ({trivia}) => {
  const classes = useStyles();

  const [random, setRandom] = useState([]);

  const randomize = () => {
    let facts = [];
    trivia.map((person)=> {
      facts.push({fact: person.fact, name: person.name});
      facts.push({fact: person.false});
    })

    let randomized = [];
    while (facts.length > 0) {
      let index = Math.floor(Math.random() * facts.length);

      randomized.push(facts[index]);
      facts.splice(index, 1);
    }
    console.log(randomized);
    setRandom(randomized);
  };

  useEffect(() => randomize(), [trivia]);

  return (
    <Card className={classes.facts}>
    { random &&
      random.map((fact, i) => (
        <Typography key={i} className={classes.fact}>{i+1}. {fact.fact}</Typography>
      ))
    }
    </Card>
  );
};

export default Facts;