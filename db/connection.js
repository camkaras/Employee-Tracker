const mysql = require("mysql2");
//require('dotenv').config()

const db = mysql.createConnection(
    {
        host: "localhost",
        // Your MySQL username
        user: "root",
        // Your MySQL password
        password: "ButtonsK17",
        database: "tracker"
    },
    console.log("Connected to the Employee Tracker database.")
);

module.exports = db;