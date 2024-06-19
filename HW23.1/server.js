const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();
const PORT = 5000;

const uri = "mongodb+srv://annasutyagina2023:oyB0n9rNBzWOOFhU@sutya.yj8kccp.mongodb.net/todoApp?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());

let db;

client.connect(err => {
    if (err) {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    } else {
        db = client.db();
        console.log("Connected to MongoDB");
    }
});

app.get('/tasks', async (req, res) => {
    try {
        console.log("Fetching tasks from database...");
        const tasksCollection = db.collection('tasks');
        const tasks = await tasksCollection.find().toArray();
        res.status(200).json(tasks);
    } catch (err) {
        console.error("Failed to load tasks", err);
        res.status(500).json({ error: 'Failed to load tasks' });
    }
});

app.post('/tasks', async (req, res) => {
    try {
        console.log("Adding new task to database...");
        const tasksCollection = db.collection('tasks');
        const result = await tasksCollection.insertOne(req.body);
        res.status(201).json(result.ops[0]);
    } catch (err) {
        console.error("Failed to add task", err);
        res.status(500).json({ error: 'Failed to add task' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
