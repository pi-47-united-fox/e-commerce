if(process.env.NODE_ENV === 'development'){
    require('dotenv').config
}

require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routers/index')
const errorHandler = require('./middlewares/errorHandler')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes)
app.use(errorHandler)

app.listen(port, () => {
    console.log(`Ecommerce app listening at http://localhost:${port}`)
})

module.exports = app