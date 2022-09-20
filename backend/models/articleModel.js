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
    isProjectArticle: {
        type: Boolean,
        required: [true, 'Please state if an article is part of a project']
    },
    
}, {
    timestamps: true
});

module.exports = mongoose.model('Article', articleSchema);