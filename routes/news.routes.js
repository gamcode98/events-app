const express = require('express')
const router = express.Router()
const { getAll } = require('../controllers/news.controller')

router.get('/', getAll)

module.exports = router
