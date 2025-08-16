const express = require('express')
const UsuariosRoute = require('./UsuariosRoute')
const AutenticacaoMiddleware = require('../middleware/AutenticacaoMiddleware')

const PrivateRoute = express.Router()
PrivateRoute.use(AutenticacaoMiddleware)
PrivateRoute.use(UsuariosRoute)

module.exports = PrivateRoute