const mongoose = require('mongoose');
const Card = require('./Card.model')
const { Schema, model } = mongoose;

const columnSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    cards: [{ type: Schema.Types.ObjectId, ref: 'Card' }],
  },
  {
    timestamps: true
  }
);

// columnSchema.pre('remove', (next) => {
//   Card.remove({_id: {$in: this.cards}}).exec();
//   next()
// });
module.exports = model('Column', columnSchema);
