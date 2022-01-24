const express = require('express');
const server = express();
const {failure} = require('../controllers/failureController');
const passport = require('passport');
const {logout} = require('../controllers/logoutController');
const {register} = require('../controllers/register');

// ------------------ path for login failure -------------------------
server.get('/failureRedirect', failure);

// ---------------------- path for login ----------------------------
server.post('/login',
passport.authenticate('local',{
    successRedirect:'/',
    failureRedirect: '/failureRedirect'
}),
(req, res, next) => {req.logIn(); next()}

);
server.get('/login', (req, res) => {
    res.send({message:"You must have authorization", content:[]})
})

// ---------------------- path for logout ----------------------------
server.post('/logout', logout)

// ------------------ path for register admin ---------------------------
server.post('/registerAdmin', register)


module.exports = server;