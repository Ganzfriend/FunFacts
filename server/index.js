const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 3000;
const {Trivia} = require('../db/index.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '../public')));

app.get('/api/facts/:groupId', (req, res) => {
  let { groupId } = req.params;
  Trivia.find({ groupId })
  .then((results) => {
    res.status(200).send(results);
  })
  .catch((err) => {
    res.status(500).send(err);
  })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
