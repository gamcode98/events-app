const { url } = require('../config')
const { asyncHandler } = require('../middlewares/async.handler')
const { find } = require('../services/news.service')

const getAll = asyncHandler(async (req, res, next) => {
  const { limit = 1, offset = 0 } = req.query
  const options = {
    limit: +limit <= 0 ? 10 : +limit,
    offset: +offset < 0 ? 0 : +offset
  }
  const { docs, prevPage, nextPage, offset: offsetResponse } = await find(options)

  const prevOffset = offsetResponse - 10
  const nextOffset = offsetResponse + 10

  return res.status(201).send({
    response: {
      content: docs,
      prevPage: `${prevPage === null ? null : url + '/api/v1/news?limit=' + options.limit + '&offset=' + prevOffset}`,
      nextPage: `${nextPage === null ? null : url + '/api/v1/news?limit=' + options.limit + '&offset=' + nextOffset}`
    }
  })
})

module.exports = {
  getAll
}
