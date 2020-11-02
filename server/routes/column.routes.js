const express = require('express');
const router = express.Router();
const Column = require('../models/Column.model');

// ****************************************************************************************
// Create
// ****************************************************************************************

// <form action="/columns" method="POST">
router.post('/api/columns', (req, res, next) => {
  console.log(req.body);
  Column.create(req.body)
    .then(columnDoc => res.status(200).json({ column: columnDoc }))
    .catch(err => next(err));
});

// ****************************************************************************************
// Read - Get all
// ****************************************************************************************

router.get('/api/columns', (req, res) => {
  Column.find()
    .populate('cards')
    .then(columnsFromDB => res.status(200).json({ columns: columnsFromDB }))
    .catch(err => next(err));
});

//****************************************************************************************
// Update
// ****************************************************************************************

// <form action="/columns/{{foundColumn._id}}/update" method="POST">
router.post('/api/columns/:id/update', (req, res) => {
  Column.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(updatedColumn => res.status(200).json({ column: updatedColumn }))
    .catch(err => next(err));
});

// ****************************************************************************************
// Delete
// ****************************************************************************************

// <form action="/columns/{{this._id}}/delete" method="post">
router.post('/api/columns/:columnId/delete', (req, res) => {
  Column.findByIdAndRemove(req.params.columnId)
    .then(() => res.json({ message: 'Successfully removed!' }))
    .catch(err => next(err));
});

// ****************************************************************************************
// Read - Get by id
// ****************************************************************************************

router.get('/api/columns/:someColumnId', (req, res) => {
  Column.findById(req.params.someColumnId)
    .populate('cards') //<= "cards" is the name of the property being referenced in Column.model.js
    .then(foundColumn => res.status(200).json({ column: foundColumn }))
    .catch(err => next(err));
});

module.exports = router;
