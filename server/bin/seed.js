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
  { "title": "Software Engineer", "company": "JPMorgan Chase & Co.", "date": "09/05/20", "postingURL" : "https://www.linkedin.com/jobs/view/2241540235", "note": `This role requires a wide variety of strengths and capabilities, including:
  BS/BA degree or equivalent experience
  Advanced knowledge of application, data and infrastructure architecture disciplinesUnderstanding of architecture and design across all systems
  Working proficiency in developmental toolsets
  Knowledge of industry wide technology trends and best practices
  Ability to work in large, collaborative teams to achieve organizational goals, and passionate about building an innovative culture
  Proficiency in one or more modern programming languages:
  Java, Python, Scala (preferable)
  Understanding of software skills such as business analysis, development, maintenance and software improvement
  Experience in implementing security and authorization in Kafka cluster
  Experience in Linux and shell scripting
  Experience in monitoring and troubleshooting JVM
  Experience in CI/CD with Jenkins pipeline`, "location": "Tampa, FL, US" },

  { "title": "Full Stack Developer", "company": "Deloitte", "date": "10/12/20",  "postingURL" : "https://www.linkedin.com/jobs/view/2230559336", "note": `Deloitte’s culture - 
  Our positive and supportive culture encourages our people to do their best work every day. We celebrate individuals by recognizing their uniqueness and offering them the flexibility to make daily choices that can help them to be healthy, centered, confident, and aware. We offer well-being programs and are continuously looking for new ways to maintain a culture where our people excel and lead healthy, happy lives.`, "location": "Miami, FL, US" },

  { "title": "Software Engineer - Cloud", "company": "Citrix", "date": "11/03/20",  "postingURL" : "https://www.linkedin.com/jobs/view/2243937045", "note": `Sounds like a very rewarding job. It's also very close to home.`, "location": "Fort Lauderdale, Florida, US" },

  { "title": "Staff Software Engineer", "company": "Chewy", "date": "12/29/20",  "postingURL" : "https://www.linkedin.com/jobs/view/2173510776", "note": `Chewy is hiring a Staff Software Engineer for our Pet Health Tech team in Dania Beach, FL. This is a high-profile position that will have exposure across the entire business, influencing the vision and directly owning the implementation of architecture, design and features for this critical business line.`, "location": "Dania Beach, FL, US" },

  { "title": "Software Engineer - Admin Experiences", "company": "GitHub", "date": "12/23/20",  "postingURL" : "https://www.linkedin.com/jobs/view/2238531164", "note": `Minimum Qualifications -
  2+ years as a full-time professional developer
  Strong written communication skills
  Experience with relational databases
  Ability to work and empathize with a wide range of teammates`, "location": "Miami, FL, US" },

  { "title": "Security Solutions - Software Engineer", "company": "Elastic", "date": "09/08/20",  "postingURL" : "https://www.linkedin.com/jobs/view/2238559797", "note": `Elastic is an open source search company that powers enterprise search, observability, and security solutions built on one technology stack that can be deployed anywhere. From finding documents to monitoring infrastructure to hunting for threats, Elastic makes data usable in real time and at scale.`, "location": "Miami, FL, US" },

  { "title": "Software Development Engineer in Test (SDET)", "company": "Wayfair", "date": "10/02/20",  "postingURL" : "https://www.linkedin.com/jobs/view/2232774485", "note": `Seniority Level - Entry level.
  Industry - Marketing & Advertising  Computer Software  Internet.
  Employment Type - Full-time.
  Job Functions - Engineering`, "location": " Boston, MA, US" },

  { "title": "Appium Automation Test Engineer", "company": "Peloton Interactive", "date": "11/12/20",  "postingURL" : "https://www.linkedin.com/jobs/view/2192833986", "note": `Peloton's Quality Engineering team is looking for experienced, well-rounded Software Development Engineer In Test (SDET) to work on our award-winning Peloton products - Peloton Bike & Peloton Tread. `, "location": "New York City, NY, US" },

  // { "title": "", "company": "", "date": "",  "postingURL" : "", "note": "", "location": "" },
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
          { "title":"Interested",
            "cards": 
            [ cardsFromDB[0]._id, cardsFromDB[1]._id]
          },
          { "title":"Applied",
          "cards": 
          [ cardsFromDB[2]._id, cardsFromDB[3]._id, cardsFromDB[4]._id]
          },
          { "title":"Interviewing",
            "cards": 
            [ cardsFromDB[5]._id]
          },
          { "title":"Rejected",
          "cards": 
          [ cardsFromDB[6]._id, cardsFromDB[7]._id]
          },
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
