const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5000; 

const uri = "mongodb+srv://annasutyagina2023:oyB0n9rNBzWOOFhU@sutya.yj8kccp.mongodb.net/your-database-name?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tlsAllowInvalidCertificates: true,
});

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db('top database'); 
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
}

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('frontend')); 

app.get('/tasks', async (req, res) => {
  if (!db) {
    console.error('Database connection is not established');
    return res.status(500).json({ error: 'Failed to connect to database' });
  }
  try {
    const tasks = await db.collection('tasks').find().toArray();
    res.json(tasks);
  } catch (error) {
    console.error('Failed to load tasks', error);
    res.status(500).json({ error: 'Failed to load tasks' });
  }
});

app.post('/tasks', async (req, res) => {
  if (!db) {
    console.error('Database connection is not established');
    return res.status(500).json({ error: 'Failed to connect to database' });
  }
  try {
    const { task } = req.body;
    const result = await db.collection('tasks').insertOne({ task });
    res.json(result.ops[0]);
  } catch (error) {
    console.error('Failed to add task', error);
    res.status(500).json({ error: 'Failed to add task' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
