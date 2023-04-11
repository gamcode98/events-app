require('dotenv').config()

const config = {
  port: process.env.PORT,
  jwtSecret: process.env.JWT_SECRET,
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  url: process.env.URL,
  cloudinaryName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY
}

module.exports = config
