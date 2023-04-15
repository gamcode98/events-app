const { mongoose } = require('../config/db')
const mongoosePagination = require('mongoose-paginate-v2')

const Schema = mongoose.Schema

const latestNewsSchema = new Schema(
  {
    title: { type: String },
    content: [String],
    author: { type: String },
    date: { type: String },
    category: [String],
    images: [String]
  },
  {
    versionKey: false
  }
)

latestNewsSchema.plugin(mongoosePagination)

const LatestNewsModel = mongoose.model('latestNews', latestNewsSchema)

module.exports = LatestNewsModel
