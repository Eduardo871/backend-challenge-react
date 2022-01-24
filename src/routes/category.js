const express = require('express');
const server = express();
const {allCategories} = require('../controllers/CategoryControllers');

server.get('/',allCategories)

module.exports = server;