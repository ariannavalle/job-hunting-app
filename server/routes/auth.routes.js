const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const User = require('../models/User.model');
const Column = require('../models/Column.model');
const bcryptjs = require('bcryptjs');
const saltRounds = 10;

const routeGuard = require('../configs/route-guard.config');

router.post('/api/signup', (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(401).json({
      message: 'All fields are mandatory. Please provide name, email, and password.'
    });

    return;
  }

  // const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  const regex = /(?=.*\d)(?=.*[a-z]).{6,}/;
  if (!regex.test(password)) {
    res.status(500).json({
      message: ["Password Criteria:", "• Must be at least 6 characters", "• Must contain at least 1 number (0-9)", "• Must contain at least 1 letter (a-z)"]
    });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      return User.create({
        name,
        email,
        passwordHash: hashedPassword
      })
    })
    .then((user) => {
      const columns = [
        {
          "title": "Interested",
          "cards": [],
          "creator": user._id
        },
        {
          "title": "Applied",
          "cards": [],
          "creator": user._id
        },
        {
          "title": "Interviewing",
          "cards": [],
          "creator": user._id
        },
        {
          "title": "Rejected",
          "cards": [],
          "creator": user._id
        },
        {
          "title": "Hired",
          "cards": [],
          "creator": user._id
        }
      ]
      Column.create(columns)
        .then((createdColumn) => {
          console.log({ createdColumn })
          req.login(user, err => {
            if (err) return res.status(500).json({ message: 'Login failed.' });
            user.passwordHash = undefined;
            res.status(200).json({ message: 'Login successful.', user, columns: createdColumn });
          })
        }).catch(err => res.json({ message: err.message }))
    })
    .catch(err => {
      if (err instanceof mongoose.Error.ValidationError) {
        res.status(500).json({ message: err.message });
      } else if (err.code === 11000) {
        res.status(500).json({
          message: 'Email is already in use.'
        });
      } else {
        next(err);
      }
    });
});

router.post('/api/login', (req, res, next) => {
  passport.authenticate('local', (err, user, failureDetails) => {
    if (err) {
      res.status(500).json({ message: 'Broken database query.' });
      return;
    }

    if (!user) {
      res.status(401).json(failureDetails);
      return;
    }

    req.login(user, err => {
      if (err) return res.status(500).json({ message: 'Something went wrong with login.' });
      user.passwordHash = undefined;
      res.status(200).json({ message: 'Login successful!', user });
    });
  })(req, res, next);
});

router.post('/api/logout', routeGuard, (req, res, next) => {
  req.logout();
  res.status(200).json({ message: 'Logout successful!' });
});

router.get('/api/isLoggedIn', (req, res) => {
  console.log('user isLoggedIn: ', req.user);
  if (req.user) {
    req.user.passwordHash = undefined;
    res.status(200).json({ user: req.user });
    return;
  }
  res.status(201).json({ message: 'Unauthorized access!' });
});

module.exports = router;
