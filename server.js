const mysql = require('mysql2');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
      // Your MySQL username,
        user: 'root',
      // Your MySQL password
        password: 'ButtonsK17',
        database: 'tracker'
    },
    console.log('Connected to the Employee Tracker database.')
);
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Employee Tracker Server running on port ${PORT}`);
});