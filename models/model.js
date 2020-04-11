//Importing the mongoose.
const mongoose = require('mongoose');

//Importing the Schema.
const Schema = mongoose.Schema;

//Creating the Schema.
const todoSchema = new Schema({
    tag: String,
    task_desc: String,
    due_date: String
});

//Creating the Model.
const model = mongoose.model('TODO', todoSchema);

const dB = {};
dB.connect = () => {
    mongoose.connect('mongodb://localhost/todo'
        , {
            useNewUrlParser: true,
            useUnifiedTopology: true 
        }
    );
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
}

//Getting the data
dB.getData = callback => {
    model.find((err, res)=>{
        callback(err, res);
    });
}

//Add New Task.
dB.addTask = (data, callback) =>{
    const record = new model(data);
    record.save((err, res) => {
        callback(err, res);
    });
}

//Delete the Row
dB.deleteTask = (data, callback) => {
    model.remove(data, err => {
        callback(err);
    });
}

module.exports = dB;