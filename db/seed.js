const mongoose = require('mongoose');
const Trivia = require('./index.js');

/**
   groupId: Number,
  name: String,
  fact: String,
  false: String,
  image: String
*/

let records = [
  {
    groupId: 1,
    name: "Chris C.",
    fact: "I love to sail and I love to kite-board.",
    false: "I've eaten turtle",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/chris.png"
  },
  {
    groupId: 1,
    name: "Ryan",
    fact: "At one time in my life I could name every country in the world!",
    false: "I can hold my breath for over 3.5 minutes",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/ryan.png"
  },
  {
    groupId: 1,
    name: "Randal",
    fact: "In the navy my nickname was Closet Nerd. I could bench 300, run a mile in 5 minutes, and out wrestle just about anyone.... but on my time off I loved playing video games and D&D and hanging out with all my fellow nerds!",
    false: "I've been making ceramics as a hobby since I was 13",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/randal.png"
  },
  {
    groupId: 2,
    name: "Saba",
    fact: "I’ve spent the night at the Tobasco Hot Sauce farm in Louisiana- very spooky!",
    false: "I can't fall asleep unless I'm watching Dora the Explorer",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/saba.png"
  },
  {
    groupId: 2,
    name: "Collin",
    fact: "I bought a sailboat without knowing how to sail. I taught myself afterwards and I've only crashed into the pier like 3 times :)",
    false: "I collect tile samples as a hobby",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/collin.png"
  },
  {
    groupId: 2,
    name: "Chris M.",
    fact: "One of my favorite facts about myself is that I have been to Antarctica!",
    false: "I spent most of my 11th birthday in the Diseny World jail",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/chrism.png"
  },
  {
    groupId: 3,
    name: "Alec",
    fact: "I am a Disney nerd. I love literally everything regarding Disney. Going to Disneyland is my true Happy Place",
    false: "I think socks are disgusting. You'll never catch me wearing them.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/alec.png"
  },
  {
    groupId: 3,
    name: "Joey",
    fact: "I’m a Nintendo collector, though I have slowed down in the last two years, I have dozens of Nintendo consoles and shelves of classic games that I don’t play enough!",
    false: "I've been to Maui 6 times.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/joey.png"
  },
  {
    groupId: 3,
    name: "Javan",
    fact: "I have a cat named Queefers.",
    false: "I'm allergic to a chemical found in asphalt (bitumen)",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/javan.png"
  },
  {
    groupId: 4,
    name: "Paula",
    fact: "I fell on top of Ice Cube (the rapper/actor). He was very nice about it.",
    false: "My childhood dream was to become an actor in an infomercial.",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/paula.png"
  },
  {
    groupId: 4,
    name: "Evan",
    fact: "My fun fact is that I was an extra on the Netflix show House of Cards (season 5).",
    false: "I can write with both hands, simultaneously",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/evan.png"
  },
  {
    groupId: 4,
    name: "Melissa",
    fact: "I'm a big fan of making weird sounds (e.g. mouth trumpet, collarbone farts, hand whistle, amateur beatboxing)",
    false: "I own a water bottle bigger than Joey's",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/melissa.png"
  },
  {
    groupId: 5,
    name: "JD",
    fact: "I have been through 6 hurricanes",
    false: "I was a part of a yodeling club in high school",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/jd.png"
  },
  {
    groupId: 5,
    name: "Eric",
    fact: " I’m slowly becoming a collector of whiskey.",
    false: "I can quote the entire Declaration of Independence, by heart",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/eric.png"
  },
  {
    groupId: 5,
    name: "Jon",
    fact: "I’m from Texas (expect lots of y’alls)",
    false: "I have an extra set of wisdom teeth",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/jon.png"
  },
  {
    groupId: 6,
    name: "Kyle",
    fact: "My undergrad at CU was a major in History and a minor in Japanese",
    false: "I was a daffodil in a past life",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/kyle.png"
  },
  {
    groupId: 6,
    name: "Thomas",
    fact: "I was a 'pro' poker player for about a year (though I was only making about 12 dollars an hour at our local casinos in Blackhawk)",
    false: "I have sung on stage with Nickelback",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/thomas.png"
  },
  {
    groupId: 6,
    name: "Matt",
    fact: "I'm colorblind",
    false: "I once told Mike, 'Hi'",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/matt.png"
  },
  {
    groupId: 7,
    name: "Chuck",
    fact: "I love the Grateful Dead, and I love cooking/baking.",
    false: "I'm a licensed massage therapist",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/chuck.png"
  },
  {
    groupId: 7,
    name: "Chuck",
    fact: "I'm a big fan of the zombie genre - movies, shows, games, stories - even the ones that are less than great (most of them are).",
    false: "I have 8 tattoos",
    image: "https://faces2021.s3-us-west-1.amazonaws.com/faces/mike.png"
  },
]

