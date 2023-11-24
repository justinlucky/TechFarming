const express = require('express');
const cors = require('cors');
const http = require('http');
const port = process.env.PORT || 7000;
require('./Config/config');

const app = express();
app.use(express.json());
app.use(cors());

// Update the MongoDB URI in your application
const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://lungchuingam:22Dec2002@users.vl63zey.mongodb.net/';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Connected to MongoDB');
});

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('Disconnected from MongoDB');
});

process.on('SIGINT', () => {
    db.close(() => {
        console.log('MongoDB connection closed through app termination');
        process.exit(0);
    });
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});