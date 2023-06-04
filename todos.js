const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
    name: String
}); 
module.exports.Todos = mongoose.model('Todos', todosSchema ); 