const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const { headersConfiguration } = require('./config/headers.js');
const { errorConfiguration } = require('./config/errorCatching.js');
const session = require('express-session');
const passport = require('passport');
const {pasportConfigure} = require('./passport/index');

const server = express();
server.name = 'API';

server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(session({
    secret: 'esUnSecreto',
    resave: false,
    saveUninitialized: true
}));
server.use(passport.initialize());
server.use(passport.session());
server.use((req, res, next) => {
    if(
        req.path === '/auth/login' ||
        req.path === '/auth/registerAdmin' ||
        req.path === '/auth/failureRedirect' ||
        req.path === '/initialBulckcreate' 

        ){
        next()
    }else {
        const autentication = req.isAuthenticated();
        console.log(req.isAuthenticated())
        if(autentication) next()
        else res.redirect('/auth/login')
    }
})




// Configuracion de las cabeceras de la
// consulta http
headersConfiguration();

// Middleware para detectar un error 
// en la api y consoleguearlo
errorConfiguration();

// // comprueba un token
pasportConfigure(passport)

// inicializando las rutas 
server.use('/', routes);


module.exports = server;
