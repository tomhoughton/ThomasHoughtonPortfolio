// Imports:
const express = require('express');
const router = express.Router();
const { getArticles, postArticle } = require('../controllers/articlesController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getArticles).post(protect, postArticle);
module.exports = router; 