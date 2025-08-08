const express = require('express')
const app = express()
const noteRoute = require('./routes/note.route')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())

app.use('/notes', noteRoute)

app.use(errorHandler)

module.exports = app