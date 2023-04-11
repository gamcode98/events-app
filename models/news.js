const { mongoose } = require('../config/db')

const Schema = mongoose.Schema

const newsSchema = new Schema(
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

const NewsModel = mongoose.model('News', newsSchema)

module.exports = NewsModel
