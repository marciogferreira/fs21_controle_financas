const express = require('express')
const UsuariosRoute = require('./UsuariosRoute')
const CartaoRoute = require('./CartaoRoute')
const AutenticacaoMiddleware = require('../middleware/AutenticacaoMiddleware')

const PrivateRoute = express.Router()
PrivateRoute.use(AutenticacaoMiddleware)
PrivateRoute.use(UsuariosRoute)
PrivateRoute.use(CartaoRoute)
PrivateRoute.use(CategoriaRoute)
module.exports = PrivateRoute