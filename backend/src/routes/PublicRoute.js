const express = require('express');
const AutorizacaoController = require('../controller/AutorizacaoController.js');
const PublicRoute = express.Router()

PublicRoute.post('/login', AutorizacaoController.login)

module.exports = PublicRoute;