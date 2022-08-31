const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');
const DB = require('./config');

const app = express(); // Create the express app;
const PORT = 5000;

// App uses:
app.use(bodyParser.json());

// Schemas:
const ProjectSchema = new mongoose.Schema({
    Id: String,
    name: String,
    gitLink: String,
    mediumArticle: String
});

// Models:
const Project = mongoose.model('Project', ProjectSchema);

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Get projects route:
app.get('/api/get-project', (req, res) => {
    var projects = Project.find({}, (err, found) => {
        if (!err) {
            let data = { data: found };
            console.log(data);
            res.json({ data: found });
        } else if (err) {
            res.send(err);
        }
    });
});

// Add a project route: 
app.post('/api/add-project', (req, res) => {
    const input = req.body; // Get the input of the request.
    const name = input.name; // Get the name of the project.
    const gitLink = input.gitLink; // Get the link to the repo.
    const mediumArticle = input.mediumArticle; // Get the link to the article.

    // Create a new project:
    const newProject = new Project({
        Id: uuidv4(), 
        name: name,
        gitLink: gitLink,
        mediumArticle: mediumArticle
    });

    newProject.save().then(() => console.log('New Project Entry Added'));

    res.send('Success');
}); 

// Start the server:
app.listen(5000, () => console.log('App is listening on port 5000'));

// Connect to the database:
mongoose.connect(DB.MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB Successful');
    });