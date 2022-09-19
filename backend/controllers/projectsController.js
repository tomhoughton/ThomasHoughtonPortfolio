// Imports:

// @desc Get Projects
// @route GET /api/projects
const getProjects = (req, res) => {
    res.json({ message: 'Hello Projects'});
}

// @desc Post Projects
// @route GET /api/projects
const postProject = (req, res) => {
    res.json({ message: 'Post Projects'});
}

module.exports = {
    getProjects,
    postProject
}