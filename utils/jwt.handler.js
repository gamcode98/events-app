const { sign, verify } = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const generateToken = (payload) => {
  const jwt = sign(payload, jwtSecret)
  return jwt
}

const verifyToken = (jwt) => {
  const isOk = verify(jwt, jwtSecret)
  return isOk
}

module.exports = { generateToken, verifyToken }
