const NewsModel = require('../models/news')

const register = async (data) => {
  const response = await NewsModel.create(data)
  return response
}

const find = async () => {
  const response = await NewsModel.find()
  return response
}

module.exports = {
  register,
  find
}
