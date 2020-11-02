const mongoose = require('mongoose');
const User = require('../models/User.model');
const Card = require('../models/Card.model');
const Column = require('../models/Column.model');

const users = [
  {
    name: "Arianna",
    email: "arianna@gmail.com",
    passwordHash: "$2a$10$sBeyeGbwT4SdyLMKfxFBrOZgIgK8y0v3Xb6bOuwhzhZ.Rece/R9Zi"
  },
];

const cards = [
  { "title": "Frontend Developer", "company": "Qwerty inc", "date": "09/05/20", "note": "This is my dream job, free lunch everyday!", "location": "California" },
  { "title": "Software Engineer", "company": "ABC corp", "date": "10/12/20", "note": "They have a gym onsite.", "location": "Serbia" },
  { "title": "QA Engineer", "company": "XYZ corp", "date": "11/03/20", "note": "Sounds like a very rewarding job.", "location": "Spain" },
  { "title": "Full Stack Developer", "company": "Evil inc", "date": "12/29/20", "note": "Red flag: no free lunch.", "location": "Florida" },
]

// start the database
require("../configs/db.config");

// clear the users and cards collection
User.collection.drop();
Card.collection.drop();
Column.collection.drop();

// seed the database with users and cards
User
  .create(users)
  .then(newUsers => {
    Card
      .create(cards)
      .then(cardsFromDB => {

        const columns = [
          { "title":"Review",
            "cards": 
            [ cardsFromDB[0]._id]
          },
          { "title":"Applied",
          "cards": 
          [ cardsFromDB[1]._id, cardsFromDB[2]._id]
          },
          { "title":"Interviewing",
            "cards": 
            [ cardsFromDB[3]._id]
          },
          { "title":"Rejected"},
          { "title":"Hired"}
        ]
        
        Column
          .create(columns)
          .then(columnsFromDB => {

            console.log({ newUsers });
            console.log({ cardsFromDB });
            console.log({ columnsFromDB });

            mongoose.disconnect();
          })
          .catch(err => console.log(`Error seeding columns: ${err}`));
      })
      .catch(err => console.log(`Error seeding cards: ${err}`));
  })
  .catch(err => console.log(`Error seeding users: ${err}`));
