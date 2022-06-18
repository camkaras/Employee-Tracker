const fs = require('fs');
const express = require('express');
const app = express();

app.listen(PORT, () => {
    console.log(`Employee Tracker server now on port ${PORT}!`);
});