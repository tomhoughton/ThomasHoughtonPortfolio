// Imports:
const express = require('express');
const router = express.Router();
const { getProjects, getProject, postProject } = require('../controllers/projectsController');
const { protect } = require('../middleware/authMiddleware');

/*
So we are baso gonna have a get request for all projects,
We will create a post request for projects, either for a seceret URL route or GTK4 Client.
*/

router.route('/').get(getProjects).post(protect, postProject);
router.route('/getProject').get(getProject);

module.exports = router;