const boom = require('@hapi/boom')
const { asyncHandler } = require('../middlewares/async.handler')
const { find, createUser } = require('../services/auth.services')
const { encrypt, verify } = require('../utils/bcrypt.handler')
const { generateToken } = require('../utils/jwt.handler')

const signup = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body

  const exist = await find({ email })

  if (exist) throw boom.forbidden('User already exists')

  const passwordHash = await encrypt(password)

  await createUser({ email, password: passwordHash })

  return res.status(201).send({
    error: false,
    message: 'User created successfully'
  })
})

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body

  const user = await find({ email })

  if (!user) throw boom.forbidden('User not found')

  const isCorrect = await verify(password, user.password)

  if (!isCorrect) throw boom.unauthorized()

  const token = generateToken({ id: user._id })

  return res.status(201).send({
    error: false,
    message: 'Login successful',
    response: {
      user: {
        id: user._id,
        email: user.email
      },
      token
    }
  })
})

module.exports = {
  signup,
  login
}
