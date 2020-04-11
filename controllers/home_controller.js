//Import the Models
const db = require('../models/model');

//Controller object.
const Controller = {};

// var for the todolist 
let todoList = [];

//Home Controller
Controller.home = (req, res)=>{
    db.connect();
    db.getData((err, data)=>{
        if(err) todoList = [];
        else todoList = data;
        return res.render('home', 
            {
                title: 'ToDo App',
                data : todoList
            }
        );
    });
    
}

//Adding the Element
Controller.addToDo = (req, res)=>{
    console.log(req.query);
    todoList.push(req.query);
    db.connect();
    db.addTask(req.query, (err, response)=>{
        if(err) console.log(err);
        res.redirect('back');
    });
}

//Deleting the row
Controller.deleteToDo = (req, res) =>{
    console.log(req.query);
    db.connect();
    db.deleteTask(req.query, err=>{
        if(err) console.log(err);
        todoList = todoList.filter((value)=>value.task_desc != req.query.task_desc)
        res.redirect('back'); 
    });
    
}

//Export the Module
module.exports = Controller;