const express = require('express');
require('express-async-errors');
const chat = require('../socket/chat');
const cors = require('cors');
const erros = require('../middleware/Error');
const routesUser = require('../router/user');

const app = express();

const server = require('http').createServer(app);

chat(server);

app.use(cors());

app.use(express.json());

app.use(routesUser);

app.use(erros);

module.exports = app;