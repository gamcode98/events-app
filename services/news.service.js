const NewsModel = require('../models/news')

const register = async (data) => {
  const response = await NewsModel.create(data)
  return response
}

const find = async (query, options) => {
  const response = await NewsModel.paginate(query, options)
  return response
}

module.exports = {
  register,
  find
}
