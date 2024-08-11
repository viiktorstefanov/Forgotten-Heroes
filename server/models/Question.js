const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  question: { type: String, required: true },
  options: [{ type: String, required: true }],
  answer: { type: String, required: true },
  level: { type: Number, required: true },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
