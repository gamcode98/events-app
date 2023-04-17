const { verifyToken } = require('../utils/jwt.handler')
const boom = require('@hapi/boom')

const checkJwt = (req, res, next) => {
  try {
    const jwtByUser = req.headers.authorization ?? ''

    const jwt = jwtByUser.split(' ').pop()

    if (!jwt) return next(boom.unauthorized('Invalid token'))

    const isUser = verifyToken(jwt)

    req.user = isUser

    return next()
  } catch (error) {
    return next(error)
  }
}

module.exports = { checkJwt }
