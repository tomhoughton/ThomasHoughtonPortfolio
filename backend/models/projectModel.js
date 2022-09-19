const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a project name']
    },
    gitHubLink: {
        type: String,
        required: [true, 'Please add a link']
    },
    articles: {
        type: [mongoose.Schema.Types.ObjectId],
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