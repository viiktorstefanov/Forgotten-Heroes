const mongoose = require('mongoose');
const { Schema } = mongoose;

const heroSchema = new Schema({
  title: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }],
  imageUrl: { type: String, required: true },
  category: { 
    type: String, 
    enum: ['srednovekovie', 'vuzrajdane', 'novotovreme'],
    required: true
  },
  dateBirth: { type: String, required: true},
  dateDeath: { type: String, required: true},
  historyMain: { type: String, required: true},
  historyAdditional: { type: String, required: true}
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
