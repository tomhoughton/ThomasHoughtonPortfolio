// Imports:
const express = require('express');
const router = express.Router();
const { getProjects, postProject } = require('../controllers/projectsController');

/*
So we are baso gonna have a get request for all projects,
We will create a post request for projects but may remove later, depends on whether 
authentication and all that will work.
*/

router.route('/').get(getProjects).post(postProject);

module.exports = router;