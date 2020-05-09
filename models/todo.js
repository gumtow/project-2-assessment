// Dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const toDoSchema = new Schema({
    task: {type:String, required:true},
}, {timestamps:true});

// Create Model
const ToDo = mongoose.model('ToDo', toDoSchema);

// Export
module.exports = ToDo;