const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a username']
    }, 
    email: {
        type: String,
        required: [true, 'Please add an email']
    },
    password: {
        type: String,
        rquired: [true, 'Please add a password']
    }
});

module.exports = mongoose.model('User', userSchema);