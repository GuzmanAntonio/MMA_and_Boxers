const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const Fighters = require('./models/Fighters')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/__Fighters_DB__')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.post('/api/fighters', (req, res) => {
  const {name, img, height, division, record} = req.body
  const newFighter = {name, img, height, division, record}

  Fighters(newFighter).save((err, savedFighter) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', data: savedFighter})
    }
  })
})

app.get('/api/fighters', (req, res) => {
  Fighters.find((err, fighters) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', fighters})
    }
  })
})

app.get('/api/fighters/:fighterId', (req, res) => {
  const fighterId = req.params.fighterId
  Fighters.findById({_id: fighterId}, (err, fighter) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', fighter})
    }
  })
})

app.delete('/api/fighters/:deleteId', (req, res) => {
  const deleteId = req.params.deleteId
  Fighters.remove({_id: deleteId}, (err, fighter) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCESS', fighter})
    }
  })
})

const server = app.listen(port, () => console.log(`Running on port: ${port} 👻 👻  👻 `))

module.exports = server
