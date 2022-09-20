const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title']
    },
    mediumLink: {
        type: String,
        required: [true, 'Please add a medium article link']
    },
    project: {
        type: mongoose.Types.ObjectId
    }
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);