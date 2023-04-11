const express = require('express')
const cors = require('cors')
const { port, url } = require('./config')
const { connection } = require('./config/db')
const { logErrors, boomErrorHandler, errorHandler } = require('./middlewares/error.handler')
const { routerApi } = require('./routes')
const { checkNews } = require('./seed/checkNews')

connection()

checkNews()

const app = express()

app.use(express.json())

app.use(cors())

routerApi(app)

app.use(logErrors)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`Listen on ${url}: ${port}`)
})
