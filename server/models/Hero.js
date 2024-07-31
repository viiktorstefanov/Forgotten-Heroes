const mongoose = require('mongoose');
const { Schema } = mongoose;

const heroSchema = new Schema({
  nameOfHero: { type: String, required: true },
  questions: [{ type: Schema.Types.ObjectId, ref: 'Question' }]
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = Hero;
