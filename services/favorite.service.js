const FavoriteModel = require('../models/favorite')

const save = async (data) => {
  const response = await FavoriteModel.create(data)
  return response
}

const find = async (query, options) => {
  const response = await FavoriteModel.paginate(query, options)
  return response
}

const updateOne = async (filter, update) => {
  const response = await FavoriteModel.updateOne(filter, update)
  return response
}

module.exports = {
  save,
  find,
  updateOne
}
