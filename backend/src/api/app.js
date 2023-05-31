require('express-async-errors');
const express = require('express');
const cors = require('cors');

const erros = require('../middleware/Error');
const routesUser = require('../router/user');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routesUser);

app.use(erros);

module.exports = app;