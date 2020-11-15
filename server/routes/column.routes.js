const express = require('express');
const router = express.Router();
const Column = require('../models/Column.model');
const Card = require('../models/Card.model');
// ****************************************************************************************
// Create
// ****************************************************************************************

// <form action="/columns" method="POST">
router.post('/api/columns', (req, res, next) => {
  Column.create({
    title: req.body.title,
    cards: [],
    creator: req.user._id
  })
  .then(columnDoc => res.status(200).json({ column: columnDoc, successMessage: 'List successfully added!' }))
  .catch(err => res.json({ failureMessage: 'Failed to create list.' }));
});

// ****************************************************************************************
// Read - Get all
// ****************************************************************************************

router.get('/api/columns', (req, res, next) => {
  Column.find()
    .populate('cards')
    .then(columnsFromDB => res.status(200).json({ columns: columnsFromDB }))
    .catch(err => next(err));
});

//****************************************************************************************
// Update
// ****************************************************************************************

// <form action="/columns/{{foundColumn._id}}/update" method="POST">
router.post('/api/columns/:id/update', (req, res, next) => {
  Column.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedColumn => res.status(200).json({ column: updatedColumn, successMessage: 'Updated successfully!' }))
    .catch(err => res.json({ failureMessage: 'Failed to update.' }));
});

// ****************************************************************************************
// Delete
// ****************************************************************************************

// <form action="/columns/{{this._id}}/delete" method="post">
router.post('/api/columns/:columnId/delete', (req, res,next) => {
  Column.findByIdAndRemove({_id: req.params.columnId})
  .then((doc) => Card.remove({_id: {$in: doc.cards}}))
  .then(() => res.json({ successMessage: 'Successfully deleted!' }))
  .catch(err => res.json({ failureMessage: 'Failed to delete card.' }))
});

// ****************************************************************************************
// Read - Get by id
// ****************************************************************************************

router.get('/api/columns/:someColumnId', (req, res, next) => {
  Column.findById(req.params.someColumnId)
    .populate('cards') //<= "cards" is the name of the property being referenced in Column.model.js
    .then(foundColumn => res.status(200).json({ column: foundColumn }))
    .catch(err => next(err));
});

module.exports = router;
