const boom = require('@hapi/boom')
const { asyncHandler } = require('../middlewares/async.handler')
const { save, find, updateOne } = require('../services/favorite.service')

const getFavorites = asyncHandler(async (req, res, next) => {
  const options = { pagination: false, populate: 'news' }

  const { docs } = await find({ userId: req.user.id }, options)

  return res.status(200).send({
    error: false,
    docs
  })
})

const saveFavorite = asyncHandler(async (req, res, next) => {
  const options = { pagination: false }

  const { docs } = await find({ userId: req.user.id }, options)

  if (req.query.remove === 'true') {
    await updateOne({ userId: req.user.id }, { $pull: { news: req.query.id } })
    return res.status(200).send({
      error: false,
      message: 'News removed from favorites'
    })
  }

  if (docs[0]?.news.includes(req.query.id)) {
    throw boom.forbidden('News already saved')
  } else if (docs.length === 0) {
    await save({ userId: req.user.id, news: [req.query.id] })
  } else {
    await updateOne({ userId: req.user.id }, { $push: { news: req.query.id } })
  }

  return res.status(201).send({
    error: false,
    message: 'Saved successully'
  })
})

module.exports = {
  getFavorites,
  saveFavorite
}
