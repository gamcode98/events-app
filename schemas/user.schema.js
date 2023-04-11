const Joi = require('joi')

const email = Joi.string().email()
const registerPassword = Joi.string()
  .min(8)
  .max(16)
  .pattern(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  )
  .message(
    '"password" must be a string with minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character'
  )
const loginPassword = Joi.string()

const createUserSchema = Joi.object({
  email: email.required(),
  password: registerPassword.required()
})

const loginUserSchema = Joi.object({
  email: email.required(),
  password: loginPassword.required()
})

module.exports = {
  createUserSchema,
  loginUserSchema
}
