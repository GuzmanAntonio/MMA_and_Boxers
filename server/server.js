const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
// const Fighters = require('./models/Fighters')
const MMARoutes = require('./routes/MMA')
const BoxingRoutes = require('./routes/Boxing')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/__Fighters_DB__')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

/// ///   MMA & BOXING ROUTES ///////

app.use('/', MMARoutes)
app.use('/', BoxingRoutes)

const server = app.listen(port, () => console.log(`Running on port: ${port} 👻 👻  👻 `))

module.exports = server
