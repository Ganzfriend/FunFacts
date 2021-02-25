const mongoose = require('mongoose');
const {Trivia} = require('./index.js');

let records = [
  {
    groupId: 0,
    name: "Chris C.",
    fact: "I love to sail and I love to kite-board.",
    false: "I've eaten turtle. Pretty good.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/chris.png"
  },
  {
    groupId: 0,
    name: "Ryan",
    fact: "At one time in my life, I could name every country in the world!",
    false: "I can hold my breath for over 3.5 minutes.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/ryan.png"
  },
  {
    groupId: 0,
    name: "Randal",
    fact: "In the navy, my nickname was Closet Nerd. I could bench 300, run a mile in 5 minutes, and out wrestle just about anyone.... but on my time off, I loved playing video games, D&D, and hanging out with all my fellow nerds!",
    false: "I've been making ceramics as a hobby since I was 13.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/randal.png"
  },
  {
    groupId: 1,
    name: "Saba",
    fact: "I’ve spent the night at the Tobasco Hot Sauce farm in Louisiana- very spooky!",
    false: "I can't fall asleep unless I'm watching Dora the Explorer.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/saba.png"
  },
  {
    groupId: 1,
    name: "Collin",
    fact: "I bought a sailboat without knowing how to sail. I taught myself afterwards and I've only crashed into the pier like 3 times :)",
    false: "I collect tile samples as a hobby -- I'm up to 30 lbs' worth!",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/collin.png"
  },
  {
    groupId: 1,
    name: "Chris M.",
    fact: "I've been to Antarctica!",
    false: "I spent most of my 11th birthday in the Disney World jail.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/chrism.png"
  },
  {
    groupId: 2,
    name: "Alec",
    fact: "I am a Disney nerd. I love literally everything regarding Disney. Going to Disneyland is my true Happy Place",
    false: "I think socks are disgusting. You'll never catch me wearing them.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/alec.png"
  },
  {
    groupId: 2,
    name: "Joey",
    fact: "I’m a Nintendo collector, though I have slowed down in the last two years, I have dozens of Nintendo consoles and shelves of classic games that I don’t play enough!",
    false: "I've been to Maui 6 times, but I only remember 5 of those times.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/joey.png"
  },
  {
    groupId: 2,
    name: "Javan",
    fact: "I have a cat named Queefers.",
    false: "I'm allergic to a chemical found in asphalt (bitumen).",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/javan.png"
  },
  {
    groupId: 3,
    name: "Paula",
    fact: "I fell on top of Ice Cube (the rapper/actor). He was very nice about it.",
    false: "My childhood dream was to become an actor in an infomercial.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/paula.png"
  },
  {
    groupId: 3,
    name: "Evan",
    fact: "My fun fact is that I was an extra on the Netflix show House of Cards (season 5).",
    false: "I can write with both hands, simultaneously.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/evan.png"
  },
  {
    groupId: 3,
    name: "Melissa",
    fact: "I'm a big fan of making weird sounds (e.g. mouth trumpet, collarbone farts, hand whistle, amateur beatboxing).",
    false: "I own a water bottle bigger than Joey's.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/melissa.png"
  },
  {
    groupId: 4,
    name: "JD",
    fact: "I have been through 6 hurricanes.",
    false: "I was a part of a yodeling club in high school.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/jd.png"
  },
  {
    groupId: 4,
    name: "Eric",
    fact: " I’m slowly becoming a collector of whiskey.",
    false: "I can quote the entire Declaration of Independence, by heart.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/eric.png"
  },
  {
    groupId: 4,
    name: "Jon",
    fact: "I’m from Texas (expect lots of y’alls).",
    false: "I have an extra set of wisdom teeth -- (they're not in my mouth anymore, but I still have them!).",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/jon.png"
  },
  {
    groupId: 5,
    name: "Kyle",
    fact: "My undergrad major was in History and a minor in Japanese.",
    false: "I was a daffodil in a past life.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/kyle.png"
  },
  {
    groupId: 5,
    name: "Thomas",
    fact: "I was a 'pro' poker player for about a year (though I was only making about 12 dollars an hour at our local casinos in Blackhawk).",
    false: "I have sung on stage with Nickelback!",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/thomas.png"
  },
  {
    groupId: 5,
    name: "Matt",
    fact: "I'm colorblind.",
    false: "I once told Mike, 'Hi'.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/matt.png"
  },
  {
    groupId: 6,
    name: "Chuck",
    fact: "I love the Grateful Dead, and I love cooking/baking.",
    false: "I'm a licensed massage therapist.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/chuck.png"
  },
  {
    groupId: 6,
    name: "Mike",
    fact: "I'm a big fan of the zombie genre - movies, shows, games, stories - even the ones that are less than great (most of them are).",
    false: "I have 12 tattoos.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/mike.png"
  },
  {
    groupId: 6,
    name: "Pablo",
    fact: "I had a pet monkey, his name was Sergio",
    false: "I can grow a beard in 1 hour",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/pablo.png"
  },
  {
    groupId: 7,
    name: "Britt",
    fact: "I love to play tetherball with the fam even though they don't like to play; I make them play with me :)",
    false: "I was Miss Colorado in 2009",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/britt.png"
  },
  {
    groupId: 7,
    name: "Clare",
    fact: "I am an avid skier, paddleboarder, hiker, and adventurer.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/clare.png"
  },
  {
    groupId: 7,
    name: "Alex",
    fact: "I lived in Madagascar, Africa while I was with the Peace Corps",
    false: "I'm the star on a YouTube series. Not going to say which one ;)",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/alex.png"
  },
  {
    groupId: 7,
    name: "Liz",
    fact: "I have meowed for probably more than 1000 people in my lifetime",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/teddi.png"
  },
]

Trivia.create(records)
.then((results)=> {
  console.log('seeding complete');
  mongoose.connection.close();
})
.catch((err)=> {
  console.log(err)
  mongoose.connection.close();
});



/*

Randal - This person has traveled around the world the last 20 years and can run 1 mile in under 5 minutes!!

Eric - this person is becoming a whiskey collector and has a Kawasaki motorcycle.

Collin - this person has jumped out of a plane and was an instructor back in high school.

Chuck - this person loves to run, loves cooking, and bake & has a favorite American rock band who was up and coming in the 1960’s.

*/