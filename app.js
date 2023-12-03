// app.js

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Sample data
const activities = [
    { key: '1', activity: 'Sample Activity 1' },
    { key: '2', activity: 'Sample Activity 2' },
];

// Routes
app.get('/api/activities', (req, res) => {
    res.json(activities);
});

app.post('/api/activities', (req, res) => {
    const { key, activity } = req.body;
    activities.push({ key, activity });
    res.json({ message: 'Activity added successfully' });
});

// Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
