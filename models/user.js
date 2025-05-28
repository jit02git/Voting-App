const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
    },
    Role: {
        type: String,
        enum: ['voter', 'admin'],
        default: 'voter'
    },
    email: {
        type: String,
        unique: true
    },
    address: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    adharcard: {
        type: Number,
        required: true,
        unique: true
    },
    isVoted: {
        type: Boolean,
        default: false
    }
})

const User = mongoose.model('User', userSchema);
module.exports = User;