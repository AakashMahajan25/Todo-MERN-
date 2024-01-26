// Required Libraries
const express = require('express');
const cors = require('cors');
// Configure App
const app = express();
// Imports
const {createTodo} = require("./types"); //Object Destructuring
// const {updateTodo} = require("./types"); //Object Destructuring
const {todo} = require("./db")


app.use(express.json());
app.use(cors());

app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if (!parsedPayload.success) {
        res.status(411).json({
            msg:"You sent the wrong inputs"
        })
        return;
        //Put it in MongoDB
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false,
    })

    res.json({
        msg: "Todo Created"
    })
});

app.get("/todos", function (req, res) {
    const todos = todo.find({});
    res.json ({
        todos: []
    })
});

app.put("/completed", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id :req.body.id
    }, {
        completed: true,
    })
    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(3000);