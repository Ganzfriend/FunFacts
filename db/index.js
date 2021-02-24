const mongoose = require('mongoose');

/* change uri to mongo atlas */
const uri = 'mongodb://localhost/fun-facts';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('MongoDB is all connected, folks!');
});

const triviaSchema = new mongoose.Schema({
});

const Trivia = mongoose.model('Trivia', triviaSchema);


module.exports = {Trivia};
