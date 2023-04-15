const news = require('../data/news')
const latestNews = require('../data/latest-news')
const LatestNewsModel = require('../models/latestNews')
const NewsModel = require('./../models/news')
const { uploadImage } = require('../utils/cloudinary.handler')

const checkNews = async () => {
  try {
    const resultToNews = await NewsModel.find()
    const resultToLatestNews = await LatestNewsModel.find()

    if (resultToNews.length === 0) {
      for await (const item of news) {
        const firstImg = await uploadImage(`images/${item.images[0]}`)
        const secondImg = await uploadImage(`images/${item.images[1]}`)

        await NewsModel.create({
          ...item,
          images: [firstImg.secure_url, secondImg.secure_url]
        })
      }
    }

    if (resultToLatestNews.length === 0) {
      for await (const item of latestNews) {
        const firstImg = await uploadImage(`images/${item.images[0]}`)
        const secondImg = await uploadImage(`images/${item.images[1]}`)

        await LatestNewsModel.create({
          ...item,
          images: [firstImg.secure_url, secondImg.secure_url]
        })
      }
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { checkNews }
