const express = require('express')
const cors = require('cors')
const app = express()
const noteRoute = require('./routes/note.route')
const errorHandler = require('./middlewares/errorHandler')

app.use(express.json())
app.use(cors())

app.use('/notes', noteRoute)

app.use(errorHandler)

module.exports = app