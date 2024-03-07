require('dotenv').config();
const app = require('./app.js');

const port = process.env.API_PORT || 3001;

app.listen(port);
console.log(`Server is running on port ${port}`);
