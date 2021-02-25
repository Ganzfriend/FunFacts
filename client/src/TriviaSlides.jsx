import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import styles from './styles.js';
import Facts from './Facts.jsx';

const useStyles = makeStyles(styles);

export default function TriviaSlides() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [trivia, setTrivia] = useState([]);
  const [selected, setSelected] = useState(null);
  const maxSteps = 7;

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

  return (
    <div>
      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
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
      {
        trivia.length && !selected &&
      <div className={classes.triviaSlides}>
        <div className={classes.facts}>
          <Facts trivia={trivia} />
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
        >
          <img
            className={classes.img}
            src={selected.image}
            alt={selected.name}
          />
          {selected.fact}
        </div>
      }
    </div>
  );
}