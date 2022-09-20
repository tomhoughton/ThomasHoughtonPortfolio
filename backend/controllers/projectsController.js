// Imports:
const asyncHandler = require('express-async-handler');

// Import the project model:
const Project = require('../models/projectModel');
const Article = require('../models/articleModel');

// @desc Get Projects
// @route GET /api/projects
const getProjects = asyncHandler( async (req, res) => {

    console.log('Before Projects');
    // Get the projects:
    let projects = await Project.find();
    
    // Get all project IDs into an array:
    let projectIds = [];
    projects.forEach((x) => {
        projectIds.push(x._id); 
    });

    // Find all relavant Articles:
    let articles = await Article.find({project: { $in: projectIds}});
    
    // Now we need to sort all of the articles,
    // And create the json response:
    let projectsReturn = []; // Create an array to store the new objects:
    projects.forEach((x) => { // Loop through:
        let y = JSON.parse(JSON.stringify(x)); // Convert from mongoose to js object
        y.articles = []; // Create empty articles array.
        let id = y._id; // Get the ID of the current project.

        articles.forEach((z) => { // Loop through the articles.
            if (z.project == id) { // Check and add if the article belongs.
                y.articles.push(z);
            }
        });
        
        projectsReturn.push(y); // Add the edited project object.
    });

    // Send the response:
    res.status(200).json({ projectsReturn });
});

// @desc Post Projects
// @route GET /api/projects
const postProject = asyncHandler( async (req, res) => {

    // Check to see if the request has what we need:
    if (!req.body.name || !req.body.gitHubLink || !req.body.logo || !req.body.description) {
        res.status(400);
        throw new Error('Please include the required fields');
    } 

    // Create a new Project:
    const project = await Project.create({
        name: req.body.name,
        gitHubLink: req.body.gitHubLink,
        logo: req.body.logo,
        images: req.body.images,
        description: req.body.description
    });

    console.log(req.body);

    res.status(200).json({project});
});

module.exports = {
    getProjects,
    postProject
}