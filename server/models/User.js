const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    email: { type: String, required: [true, 'Email is missing'], minlength: [9, 'Email should be at least 9 characters long'], unique: [true, 'Email address is already taken']  }, 
    hashedPassword: { type: String, required: true },
    username: { type: String, required: [true, 'First name is missing'] },
    points: { type: Number, default: 0}
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;