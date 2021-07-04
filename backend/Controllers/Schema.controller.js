'use strict'

const gamesModel = require('../Models/Schema.model')

const creatFavoriteGame = async (req, res) => {
  const { name, img, gender, psiPowers } = req.body

  const slug = name.toLowerCase().split(' ').join('-');
  gamesModel.find({ name: name }, (error, data) => {
    if (data.lengh > 0) {
      res.send('Data is already exist')
    } else {
      const newGameModel = new gamesModel({
        name: name, img: img, gender: gender, psiPowers: psiPowers, slug: slug
      });
      console.log({ 'name': name });
      newGameModel.save()
      res.send(newGameModel)
    }
  })
}
const getFavoriteGame = async (req, res) => {
  gamesModel.find({}, (error, data) =>
    res.send(data))
}
const deleteFavoriteGame = async (req, res) => {
  const slug = req.params.slug;
  gamesModel.remove({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      res.send(data)
    }
  })
}
const putFavoriteGame = async (req, res) => {
  const { psiPowers } = req.body;
  const slug = req.params.slug;
  gamesModel.find({ slug: slug }, (error, data) => {
    if (error) {
      res.send(error)
    } else {
      data[0].psiPowers = psiPowers;
      data[0].save();
      res.send(data)
    }
  })
}


module.exports = {
  creatFavoriteGame,
  getFavoriteGame,
  deleteFavoriteGame,
  putFavoriteGame
}