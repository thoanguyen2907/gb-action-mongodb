const express = require('express')
const mongoose = require("mongoose"); 
const {Todos} = require('./todos'); 

const app = express()
app.use(express.json());
const port = 3000
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://mongodb:27017/test",
{useNewUrlParser: true})
    .then(() => {
        app.listen(port, () =>
            console.log(`The server is running on port ${port}, db connected`)
        );
    })
    .catch((error) => {
        console.log("MongoDB connection error. Please make sure MongoDB is running." + error);
    process.exit(1);
})


app.get('/', (req, res) => {
  res.send('Hello World changed!!!')
})

app.get('/todos', async (req, res) => {
    const todos = await Todos.find({}); 
    console.log(todos)
    res.send(todos)
  })

app.post('/todos', async (req, res) => {
    const todoRequest = await req.body; 
    const doc = new Todos(todoRequest); 
    await doc.save();
    res.send(doc)
  })
  
