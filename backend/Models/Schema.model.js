'use strict'

const mongoose = require('mongoose')

const gamesSchema = mongoose.Schema({
  name: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  img: String,
  gender: String,
  psiPowers: String
})

const gamesModel = mongoose.model('gamesModel', gamesSchema)

module.exports = gamesModel