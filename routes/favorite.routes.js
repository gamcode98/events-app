const express = require('express')
const router = express.Router()
const { saveFavorite, getFavorites } = require('../controllers/favorite.controller')
const { checkJwt } = require('../middlewares/session.handler')

router.get('/', checkJwt, getFavorites)
router.post('/', checkJwt, saveFavorite)

module.exports = router
