const express = require('express');
const AutorizacaoController = require('../controller/AutorizacaoController.js');
const PublicRoute = express.Router()

PublicRoute.post('/login', AutorizacaoController.login)
PublicRoute.post('/register', AutorizacaoController.register)

module.exports = PublicRoute;