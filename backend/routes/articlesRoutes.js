// Imports:
const express = require('express');
const router = express.Router();
const { getArticles, postArticle } = require('../controllers/articlesController');

router.route('/').get(getArticles).post(postArticle);

module.exports = router; 