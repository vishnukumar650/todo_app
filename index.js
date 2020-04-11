//Importing the required libraries
const express = require('express');
const path    = require('path');
const router  = require('./routes/route');

//Assigning constant variable to refer express app
const app = express();

//Seting the port
const PORT = 3000;

//Seting the View Engine to ejs.
app.set('view engine', 'ejs');

//Using the urlencoded
app.use(express.urlencoded({extended: true}));

//Path to static files
app.use(express.static('assets'));

//Using the routers
app.use('/', router);

//Start the server and listen on the port assigned to the port variable
app.listen(PORT, err=>{
    if(!err)console.log('App is running on PORT: ', PORT);
    else console.log(err);
});