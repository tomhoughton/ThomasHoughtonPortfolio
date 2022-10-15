const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a project name']
    },
    projectLink: {
        type: String,
        required: [true, 'Please add a link']
    },
    logo: {
        type: String,
        required: [true, 'Please add a logo file name']
    },
    images: {
        type: String
    },
    description: {
        type: String,
        required: [true, 'Please add a description']
    }
});

module.exports = mongoose.model('Project', projectSchema);