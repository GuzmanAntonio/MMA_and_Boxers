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

app.post('/api/mma-fighters', (req, res) => {
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

app.get('/api/mma-fighters', (req, res) => {
  Fighters.find((err, fighters) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', fighters})
    }
  })
})

app.get('/api/mma-fighters/:fighterId', (req, res) => {
  const fighterId = req.params.fighterId
  Fighters.findById({_id: fighterId}, (err, fighter) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'FOUND', fighter})
    }
  })
})

app.delete('/api/fighters/:deleteId', (req, res) => {
  const deleteId = req.params.deleteId
  Fighters.remove({_id: deleteId}, (err, fighter) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'DELETED', fighter})
    }
  })
})

/// ///////////  BOXERS /////////////////////

app.post('/api/boxers', (req, res) => {
  const {name, img, height, division, record} = req.body
  const newBoxer = {name, img, height, division, record}

  Fighters(newBoxer).save((err, savedBoxer) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', savedBoxer})
    }
  })
})

app.get('/api/boxers', (req, res) => {
  Fighters.find((err, boxers) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'SUCCESS', boxers})
    }
  })
})

app.get('/api/boxers/:boxerId', (req, res) => {
  const boxerId = req.params.boxerId
  Fighters.findById({_id: boxerId}, (err, boxer) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'FOUND', boxer})
    }
  })
})

app.delete('/api/boxers/:deleteBoxer', (req, res) => {
  const deleteBoxer = req.params.deleteBoxer
  Fighters.remove({_id: deleteBoxer}, (err, boxer) => {
    if (err) {
      res.json({error: err})
    } else {
      res.json({msg: 'DELETED', boxer})
    }
  })
})

const server = app.listen(port, () => console.log(`Running on port: ${port} 👻 👻  👻 `))

module.exports = server
