const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');

// Init express.
const app = express();

// Enable CORS.
app.use(cors());

// Enable bodyParser.
app.use(bodyParser.json());


//Set API routes
const api = require('./api/');
app.use('/api',api);

// Static path to dist to serve the front end files.
app.use(express.static(path.join(__dirname, '/front/dist/front/')));

// Set app port.
const port = process.env.PORT || '3000';
app.set('port', 3000);

// Create HTTP server.
const server = http.createServer(app);
 
// Listen on port.
server.listen(port, () => console.log(`Server started (localhost:${port})!`));
