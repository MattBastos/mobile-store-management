require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');

const port = process.env.API_PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(router);

app.listen(port);
console.log(`Server is running on port ${port}`);

module.exports = app;
