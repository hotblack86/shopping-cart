'use strict';

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
const data = require('./data');
const middleware = require('./middleware');