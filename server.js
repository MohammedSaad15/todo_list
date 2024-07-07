// server.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('public'));

let tasks = [];

app.post('/tasks', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.status(201).send('Task added');
});

app.get('/tasks', (req, res) => {
  res.status(200).json(tasks);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:3000`);
});
