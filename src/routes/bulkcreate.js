const express = require('express');
const { initialBulckcreate } = require('../controllers/Bulkcreate');
const server = express();

server.get('/', initialBulckcreate);

module.exports = server;