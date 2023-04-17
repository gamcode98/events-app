const express = require('express')
const authRouter = require('./auth.routes')
const newsRouter = require('./news.routes')
const favoriteRouter = require('./favorite.routes')

const routerApi = (app) => {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/auth', authRouter)
  router.use('/news', newsRouter)
  router.use('/favorites', favoriteRouter)
}

module.exports = { routerApi }
