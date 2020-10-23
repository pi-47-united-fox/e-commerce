const route = require('express').Router()
const { UserController } = require('../controllers')

route.post('/login', UserController.loginHandler)
route.post('/register', UserController.registerHandler)


module.exports = route