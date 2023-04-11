const { sign, verify } = require('jsonwebtoken')
const { jwtSecret } = require('../config')

const generateToken = (payload, time = '2h') => {
  const jwt = sign(payload, jwtSecret, {
    expiresIn: time
  })

  return jwt
}

const verifyToken = (jwt) => {
  const isOk = verify(jwt, jwtSecret)
  return isOk
}

module.exports = { generateToken, verifyToken }
