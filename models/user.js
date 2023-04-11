const { mongoose } = require('../config/db')

const Schema = mongoose.Schema

const userSchema = new Schema(
  {
    email: { type: String },
    password: { type: String }
  },
  {
    versionKey: false
  }
)

const UserModel = mongoose.model('User', userSchema)

module.exports = UserModel
