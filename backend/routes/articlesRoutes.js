// Imports:
const express = require('express');
const router = express.Router();

router.route('/').get(getArticles).post(postArticle);