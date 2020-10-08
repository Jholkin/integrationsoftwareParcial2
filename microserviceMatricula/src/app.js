const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
require('./database');

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configuration
const port = process.env.port || 5000;

// Routes
const matricula = require('./routes');

// Functions
app.use('/api/matricula', matricula);

app.listen(port, () => {
    console.log(`Server run ins port ${port}`);
});

module.exports = app;