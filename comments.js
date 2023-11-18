// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
// Create app
const app = express();
// Add other middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());
// Add routes
app.use('/posts', require('./routes/posts'));
// Run app
app.listen(4002, () => {
    console.log('Listening on 4002');
});