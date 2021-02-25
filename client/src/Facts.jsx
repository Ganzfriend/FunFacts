import React, { useState, useEffect } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import styles from './styles.js';

const useStyles = makeStyles(styles);

const Facts = ({trivia}) => {
  const classes = useStyles();

  const [random, setRandom] = useState([]);

  const randomize = () => {
    let facts = [];
    trivia.map((person)=> {
      facts.push(person.fact);
      facts.push(person.false);
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

  useEffect(() => randomize(), []);

  return (
    <div className={classes.facts}>
    { random &&
      random.map((fact, i) => (
        <div key={i}>{i+1}. {fact}</div>
      ))
    }
    </div>
  );
};

export default Facts;