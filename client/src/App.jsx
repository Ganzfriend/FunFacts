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
  );
};

export default App;