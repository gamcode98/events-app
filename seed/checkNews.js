const news = require('../data/news')
const { uploadImage } = require('../utils/cloudinary.handler')
const NewsModel = require('./../models/news')

const checkNews = async () => {
  try {
    const result = await NewsModel.find()

    if (result.length === 0) {
      for await (const item of news) {
        const firstImg = await uploadImage(`images/${item.images[0]}`)
        const secondImg = await uploadImage(`images/${item.images[1]}`)

        await NewsModel.create({
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
