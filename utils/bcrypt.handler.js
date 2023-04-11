const { hash, compare } = require('bcrypt')

const encrypt = async (password) => {
  const passwordHash = await hash(password, 10)
  return passwordHash
}

const verify = async (password, passwordHash) => {
  const isCorrect = await compare(password, passwordHash)
  return isCorrect
}

module.exports = { encrypt, verify }
