const cloudinary = require('cloudinary').v2
const { cloudinaryApiKey, cloudinaryName, cloudinaryApiSecret } = require('../config')

cloudinary.config({
  cloud_name: cloudinaryName,
  api_key: cloudinaryApiKey,
  api_secret: cloudinaryApiSecret,
  secure: true
})

const uploadImage = async (filePath) => {
  return await cloudinary.uploader.upload(filePath, {
    folder: 'events-app'
  })
}

module.exports = { uploadImage }
