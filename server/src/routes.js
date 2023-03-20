const express = require('express');
const cors = require('cors');

const AuthController = require('./controllers/auth');

const { verifyJWT } = require('./controllers/auth');

const routes = express.Router();

routes.use(cors());

routes.post('/login', AuthController.login);

routes.post('/register', AuthController.register);

module.exports = routes;