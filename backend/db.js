const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://admin:GFidtnZiHCQ7b46J@cluster0.2isyv0j.mongodb.net/todos")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
})

const todo = mongoose.model('todos', todoSchema)
module.exports = { 
    todo
}