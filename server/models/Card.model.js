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
      type: Date,
    },
    note: {
      type: String,
    },
    location: {
      type: String,
    },
    salary: {
      type: Number,
    },
    postingURL: {
      type: String,
    },
    creator: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
);

module.exports = model('Card', cardSchema);
