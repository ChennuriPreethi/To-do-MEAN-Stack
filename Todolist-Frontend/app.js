var express = require('express');
var app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const cors =  require("cors")
app.use(cors())

const { MongoClient, ObjectId } = require('mongodb');
const url = "mongodb://127.0.0.1:27017"


app.get("/viewTask", function (req, res) {
    MongoClient.connect(url, (err, con) => {
        var db = con.db("ToDoList")
        db.collection("ToDo").find()
            .toArray((err, data) => {
                console.log(data);
                res.send(data)
            })
    })
})

app.get("/view/:id", (req, res) => {
    MongoClient.connect(url, function (err, conn) {
        var db = conn.db("ToDoList")
        db.collection("ToDo").find({ _id: ObjectId(req.params.id) }).toArray((err, data) => {
            res.send(data)
        })
    })
})

app.post("/insertTask", function (req, res) {
    console.log(req.body);
    MongoClient.connect(url, function (err, con) {
        var db = con.db("ToDoList")
        db.collection("ToDo").insertOne(req.body, function (err, data) {
            console.log(data);
            res.send("success")
        })
    })
})


app.patch('/updateTask/:id', (req, res) => {
    MongoClient.connect(url, (err, conn) => {
        var db = conn.db('ToDoList');
        db.collection('ToDo').updateOne(
            { _id: ObjectId(req.params.id) },
            { $set: req.body },
            (err, data) => {
                res.send(data)
            }
        )
    })
})

app.delete('/deleteTask/:id', (req, res) => {
    MongoClient.connect(url, (err, conn) => {
        var db = conn.db('ToDoList');
        db.collection('ToDo').findOneAndDelete(
            { _id: ObjectId(req.params.id) },
            { $set: req.body },
            (err, data) => {
                res.send(data)
            }
        )
    })
})


app.listen(9090, function () {
    console.log(" running 9090")
})