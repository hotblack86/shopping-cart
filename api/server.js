'use strict';

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');
const middleware = require('./middleware');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// GET request
app.get('/api/products', (req, res) => { //lists all  available products
  return res.json(data.products);
});






const PORT = 5000;

app.listen(PORT);
console.log('api runnging on port ' + PORT + ': ');
