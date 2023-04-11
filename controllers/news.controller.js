const { asyncHandler } = require('../middlewares/async.handler')
const { find } = require('../services/news.service')

const getAll = asyncHandler(async (req, res, next) => {
  const response = await find()
  return res.status(201).send({
    response
  })
})

module.exports = {
  getAll
}
