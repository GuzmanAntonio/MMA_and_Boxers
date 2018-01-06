const express = require('express')
const Router = express.Router()
const Fighters = require('../models/Fighters')

Router.route('/api/boxers')
  .post((req, res) => {
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

Router.route('/api/boxers')
  .get((req, res) => {
    Fighters.find((err, boxers) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', boxers})
      }
    })
  })

Router.route('/api/boxers/:boxerId')
  .get((req, res) => {
    const boxerId = req.params.boxerId
    Fighters.findById({_id: boxerId}, (err, boxer) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'FOUND', boxer})
      }
    })
  })

Router.route('/api/boxers/:deleteBoxer')
  .delete((req, res) => {
    const deleteBoxer = req.params.deleteBoxer
    Fighters.remove({_id: deleteBoxer}, (err, boxer) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'DELETED', boxer})
      }
    })
  })

module.exports = Router
