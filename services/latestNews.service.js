const LatestNewsModel = require('../models/latestNews')

const register = async (data) => {
  const response = await LatestNewsModel.create(data)
  return response
}

const find = async (query, options) => {
  const response = await LatestNewsModel.paginate(query, options)
  return response
}

module.exports = {
  register,
  find
}
