const passport = require('passport');
const User = require('../../models/User.model');

// defines what data is going to be saved in the session when user logs in successfully
passport.serializeUser((loggedInUser, next) => {
  // serialize user => save user id to the session
  next(null, loggedInUser._id);
});

passport.deserializeUser((userIdFromSession, next) => {
  // deserialize user => retrieve user information from database
  User.findById(userIdFromSession)
    .then(fullUserDoc => next(null, fullUserDoc))
    .catch(err => next(err));
});
