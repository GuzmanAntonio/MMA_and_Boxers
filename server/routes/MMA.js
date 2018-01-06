const express = require('express')
const Router = express.Router()
const Fighters = require('../models/Fighters')

Router.route('/api/mma-fighters')
  .get((req, res) => {
    Fighters.find((err, fighters) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'SUCCESS', fighters})
      }
    })
  })

Router.route('/api/mma-fighters')
  .post((req, res) => {
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

Router.route('/api/mma-fighters/:deleteId')
  .delete((req, res) => {
    const deleteId = req.params.deleteId
    Fighters.remove({_id: deleteId}, (err, fighter) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'DELETED', fighter})
      }
    })
  })

Router.route('/api/mma-fighters/:fighterId')
  .get((req, res) => {
    const fighterId = req.params.fighterId
    Fighters.findById({_id: fighterId}, (err, fighter) => {
      if (err) {
        res.json({error: err})
      } else {
        res.json({msg: 'FOUND', fighter})
      }
    })
  })

module.exports = Router
