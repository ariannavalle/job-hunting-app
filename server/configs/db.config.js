const mongoose = require('mongoose');

const db = process.env.MONGODB_URI || 'mongodb://localhost/job-hunting-app'
mongoose
  .connect(db, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true
  })
  .then(x => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch(err => console.error(`Error connecting to mongo: ${err}`));
