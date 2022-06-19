const mysql = require('mysql2');
const db = require("./db/connection");
const express = require('express');
const startInquirer = require("./lib/app");
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Employee Tracker Server running on port ${PORT}`);
        startInquirer();
    });
});