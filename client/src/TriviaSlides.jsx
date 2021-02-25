import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {Paper, Typography, Button, MobileStepper, Slide} from '@material-ui/core';
import {KeyboardArrowLeft, KeyboardArrowRight} from '@material-ui/icons';
import styles from './styles.js';
import Facts from './Facts.jsx';

const useStyles = makeStyles(styles);

export default function TriviaSlides() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [trivia, setTrivia] = useState([]);
  const [selected, setSelected] = useState(null);
  const [random, setRandom] = useState([]);
  const maxSteps = 9;

  const randomize = () => {
    let facts = [];
    trivia.map(person => {
      facts.push(person.fact);
      facts.push(person.false);
    })

    let randomized = [];
    while (facts.length > 0) {
      let index = Math.floor(Math.random() * facts.length);
      randomized.push(facts[index]);
      facts.splice(index, 1);
    }
    setRandom(randomized);
  };

  const getTriviaData = () => {
    axios.get(`http://localhost:3000/api/facts/${activeStep}`)
      .then(result => setTrivia(result.data))
      .catch(err => console.log(err));
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => getTriviaData(), [activeStep]);
  useEffect(() => randomize(), [trivia]);

  return (
    <div className={classes.triviaContainer}>
      {
        !!trivia.length && !selected &&
      <div className={classes.triviaSlides}>
        <div className={classes.facts}>
          <Facts random={random} />
        </div>
        <div className={classes.faces}>
          {
            trivia.map(person => (
              <div
                key={person._id}
                onClick={() => setSelected(person)}
              >
                <img
                  className={classes.img}
                  src={person.image}
                  alt={person.name}
                />
                <Typography variant="h4">{person.name}</Typography>
              </div>
            ))
          }
        </div>
      </div>
      }
      {
        selected &&
        <div
          onClick={() => setSelected(null)}
          className={classes.selected}
        >
          <img
            className={classes.img}
            src={selected.image}
            alt={selected.name}
          />
          <Typography variant="h3">{selected.fact}</Typography>
        </div>
      }
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        classes={{root: classes.stepper}}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </div>
  );
}