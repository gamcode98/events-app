const { url } = require('../config')
const { asyncHandler } = require('../middlewares/async.handler')
const { find } = require('../services/news.service')

const getAll = asyncHandler(async (req, res, next) => {
  const { limit = 10, offset = 0, title } = req.query
  const options = {
    limit: +limit <= 0 ? 10 : +limit,
    offset: +offset < 0 ? 0 : +offset
  }

  const query = {}

  if (title) {
    query.title = { $regex: new RegExp(title), $options: 'i' }
  }

  const { docs, hasPrevPage, hasNextPage, offset: offsetResponse } = await find(query, options)

  const prevOffset = offsetResponse - options.limit
  const nextOffset = offsetResponse + options.limit

  const prevPage = hasPrevPage ? url + '/api/v1/news?limit=' + options.limit + '&offset=' + prevOffset : null

  const nextPage = hasNextPage ? url + '/api/v1/news?limit=' + options.limit + '&offset=' + nextOffset : null

  return res.status(200).send({
    response: {
      content: docs,
      prevPage,
      nextPage
    }
  })
})

module.exports = {
  getAll
}
