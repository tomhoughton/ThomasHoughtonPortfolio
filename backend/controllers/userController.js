// Imports:
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Generate a jwt token for authentication:
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECERET, {
        expiresIn: '10d'
    });
}

const registerUser = asyncHandler( async (req, res) => {
    
    // Get the name email and password: 
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400);
        throw new Error('Please add all user fields');
    }

    // Check to see if the user exists:
    const userExists = await User.findOne({ email });

    if (userExists) {
        res.status(400);
        throw new Error('User already exists');
    }
    
    // Hash the password:
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    // Create the user:
    const newUser = await User.create({
        name,
        email,
        password: hash
    }); 
    
    if (newUser) {
        // Set to 201 to show ok request and that something was created:
        res.status(201).json({
            _id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            token: generateToken(newUser._id)
        });
    }

    res.status(200).json({ message: 'Register' });
});

const loginUser = asyncHandler( async (req, res) => {
    
    // Get the name email and password: 
    const { email, password } = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error('Please add all user fields');
    }

    // Check for the user email:
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        });
    } else {
        res.status(400);
        throw new Error('Invalid password or email');
    }

    res.status(200).json({message: 'Login'});
});

module.exports = {
    registerUser,
    loginUser
}