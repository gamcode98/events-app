const NewsModel = require('../models/news')

const register = async (data) => {
  const response = await NewsModel.create(data)
  return response
}

const find = async (options) => {
  const response = await NewsModel.paginate({}, options)
  return response
}

module.exports = {
  register,
  find
}
