const express = require('express')
const router = express.Router()
const { signup, login } = require('../controllers/auth.controller')
const { validatorHandler } = require('../middlewares/validator.handler')
const { createUserSchema, loginUserSchema } = require('../schemas/user.schema')

router.post('/signup', validatorHandler(createUserSchema, 'body'), signup)

router.post('/login', validatorHandler(loginUserSchema, 'body'), login)

module.exports = router
