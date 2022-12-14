// Imports:
const asyncHandler = require('express-async-handler');

// Import the models:
const Article = require('../models/articleModel');

// @desc Get Articles:
// @route GET /api/articles
const getArticles = asyncHandler( async (req, res) => {

    // Get all of the articles:
    const articles = await Article.find();

    res.status(200).json({articles});
});

const postArticle = asyncHandler( async (req, res) => {

    // Check if the request body has what we need:
    if (!req.body.title  || !req.body.mediumLink || !req.body.project || !req.body.tlDr) {
        res.status(400); 
        throw new Error('Please add the necesarry fields');
    } 

    const article = await Article.create({
        title: req.body.title,
        mediumLink: req.body.mediumLink,
        project: req.body.project,
        tlDr: req.body.tlDr
    });

    console.log(req.body);

    res.status(200).json({newArticle: article});
});


module.exports = {
    getArticles,
    postArticle
}
