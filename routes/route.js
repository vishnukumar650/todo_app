//Imports
const express = require('express');
const controller = require('../controllers/home_controller');

//Get Router from Express
const Router  = express.Router();

//Build Route for Home.
Router.get('/', controller.home);

//Route for Add Element in todo
Router.get('/add_todo', controller.addToDo);

//Route for Delete the Element in todo
Router.get('/delete_task', controller.deleteToDo);

//Exports the Module Router
module.exports = Router;