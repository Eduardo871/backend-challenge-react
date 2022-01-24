const express = require('express');
const { allProduct } = require('../controllers/ProductControllers');
const server = express();

server.get('/',allProduct);

module.exports = server;