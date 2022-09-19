
// @desc Get Articles:
// @route GET /api/articles
const getArticles = (req, res) => {
    res.json({ message: 'Hello Articles' });
}

const postArticle = (req, res) => {
    res.json({ message: 'Post Articles' });
}


module.exports = {
    getArticles,
    postArticle
}






