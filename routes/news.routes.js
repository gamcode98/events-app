const express = require('express')
const router = express.Router()
const { getAll } = require('../controllers/news.controller')
const { getLatestNews } = require('../controllers/latestNews.controller')

router.get('/', getAll)
router.get('/latest', getLatestNews)

module.exports = router
