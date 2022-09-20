// Imports:
const asyncHandler = require('express-async-handler');

// Import the models:
const Article = require('../models/articleModel');

// @desc Get Articles:
// @route GET /api/articles
const getArticles = asyncHandler( async (req, res) => {

    // Get all of the articles:
    const articles = await Article.find();

    // TODO: This might just be changed to retreive only the articles not 
    // Part of a project

    res.status(200).json({articles});
});

const postArticle = asyncHandler( async (req, res) => {

    // Check if the request body has what we need:
    if (!req.body.title  || !req.body.mediumLink || !req.body.isProjectArticle) {
        res.status(400); 
        throw new Error('Please add the necesarry fields');
    }

    // Convert Is Project Article to a boolean:
    let projectArticle = (req.body.isProjectArticle === 'true'); 

    const article = await Article.create({
        title: req.body.title,
        mediumLink: req.body.mediumLink,
        isProjectArticle: projectArticle
    });


    console.log(req.body);

    res.status(200).json({newArticle: article});
});


module.exports = {
    getArticles,
    postArticle
}
