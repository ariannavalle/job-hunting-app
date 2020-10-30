const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcryptjs = require('bcryptjs');

const User = require('../../models/User.model');

passport.use(
  'local',
  new LocalStrategy(
    {
      usernameField: 'email'
    },
    (email, password, next) => {
      User.findOne({ email })
        .then(userFromDB => {
          if (!userFromDB) {
            next(null, false, { message: 'Incorrect email.' });
            return;
          }

          if (!bcryptjs.compareSync(password, userFromDB.passwordHash)) {
            next(null, false, { message: 'Incorrect password.' });
            return;
          }

          next(null, userFromDB);
        })
        .catch(err => next(err));
    }
  )
);
