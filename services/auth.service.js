const UserModel = require('../models/user')

const createUser = async (user) => {
  const response = await UserModel.create(user)
  return response
}

const find = async (data) => {
  const response = await UserModel.findOne(data)
  return response
}

module.exports = {
  createUser,
  find
}
