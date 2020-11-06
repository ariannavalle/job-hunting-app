const { Schema, model } = require('mongoose');

const cardSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required.'],
    },
    company: {
      type: String,
      required: [true, 'Company name is required.'],
    },
    date: {
      type: String,
    },
    note: {
      type: String,
    },
    location: {
      type: String,
    },
    postingURL: {
      type: String,
    },
  },
  {
    timestamps: true
  }
);

module.exports = model('Card', cardSchema);
