// ROUTES FILE NEEDS TO BE REQUIRED IN THE APP.JS IN ORDER NOT TO GIVE 404
// APP NEEDS TO KNOW YOU CREATED A NEW ROUTE FILE,
// THAT'S THE ONLY WAY FOR IT TO KNOW WHICH ROUTES YOU WANT TO HIT

const express = require('express');
const router = express.Router();

const Card = require('../models/Card.model');

// ****************************************************************************************
// Create
// ****************************************************************************************

// <form action="/cards" method="POST">
router.post('/api/cards', (req, res, next) => {
  // console.log(req.body);
  Card.create(req.body)
    .then(cardDoc => res.status(200).json({ card: cardDoc }))
    .catch(err => next(err));
});

// ****************************************************************************************
// Read - Get all
// ****************************************************************************************

router.get('/api/cards', (req, res) => {
  Card.find()
    .then(cardsFromDB => res.status(200).json({ cards: cardsFromDB }))
    .catch(err => next(err));
});

// ****************************************************************************************
// Update
// ****************************************************************************************

// <form action="/cards/{{foundCard._id}}/update" method="POST">
router.post('/api/cards/:id/update', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedCard => res.status(200).json({ card: updatedCard }))
    .catch(err => next(err));
});

// ****************************************************************************************
// Delete
// ****************************************************************************************

// <form action="/cards/{{this._id}}/delete" method="post">
router.post('/api/cards/:cardId/delete', (req, res) => {
  Card.findByIdAndRemove(req.params.cardId)
    .then(() => res.json({ message: 'Successfully removed!' }))
    .catch(err => next(err));
});

// ****************************************************************************************
// Read - Get by id
// ****************************************************************************************

router.get('/api/cards/:someCardId', (req, res) => {
  Card.findById(req.params.someCardId)
    .populate('author')
    .then(foundCard => res.status(200).json({ card: foundCard }))
    .catch(err => next(err));
});

module.exports = router;
