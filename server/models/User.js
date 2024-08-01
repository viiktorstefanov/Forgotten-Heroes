const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: { type: String, required: true },
  points: { type: Number, default: 0, required: true }
});

const User = mongoose.model('User', userSchema);

module.exports = User;