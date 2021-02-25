import React, {useState, useEffect} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import axios from 'axios';
import TriviaSlides from './TriviaSlides.jsx';
import Home from './Home.jsx';
import styles from './styles.js';

const useStyles = makeStyles(styles);

const App = () => {
  const classes = useStyles();
  const [clicked, setClicked] = useState(false);

  return (
    <div className={classes.main}>
      <div className={classes.container}>
        {
          !clicked &&
        <Home setClicked={setClicked}/>
        }
        {
        clicked &&
        <TriviaSlides />
        }
      </div>
    </div>
  );
};

export default App;


/*
TODO:
1. Fix styling (card, answer area, stepper bar, background) x
2. Bonus round!! ( seed dummy data for britt, teddi, angie, clare, liz, and alex ) x
3. Add our floating animated heads to home page x
4. Deploy on heroku
5. background: https://data9000.s3-us-west-1.amazonaws.com/hostfaces.png
*/