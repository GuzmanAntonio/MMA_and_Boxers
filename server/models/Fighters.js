const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Fighters = new Schema({
  name: { type: String, required: true },
  img: { type: String, required: true },
  height: String,
  division: String,
  record: String
})

module.exports = mongoose.model('Fighters', Fighters)
