const { mongoose } = require('../config/db')
const mongoosePagination = require('mongoose-paginate-v2')

const Schema = mongoose.Schema

const newsSchema = new Schema(
  {
    title: { type: String },
    content: [String],
    author: { type: String },
    date: { type: String },
    category: [String],
    images: [String],
    location: { type: String },
    latitude: { type: Number },
    longitude: { type: Number },
    price: { type: Number }
  },
  {
    versionKey: false
  }
)

newsSchema.plugin(mongoosePagination)

const NewsModel = mongoose.model('News', newsSchema)

module.exports = NewsModel
