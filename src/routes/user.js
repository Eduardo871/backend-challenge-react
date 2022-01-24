const express = require('express');
const server = express();
const {createUser} = require('../controllers/UserControllers');

server.post('/user', createUser)

server.get('/', (req, res) => {
    res.send({message:"Welcome " + req.user.fullname, content:[]});
})

module.exports = server;