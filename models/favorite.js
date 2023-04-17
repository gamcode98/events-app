const { mongoose } = require('../config/db')
const mongoosePagination = require('mongoose-paginate-v2')

const Schema = mongoose.Schema

const favoriteSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    news: [{
      type: Schema.Types.ObjectId,
      ref: 'News'
    }]
  }, {
    versionKey: false
  }
)

favoriteSchema.plugin(mongoosePagination)

const FavoriteModel = mongoose.model('Favorite', favoriteSchema)

module.exports = FavoriteModel
