'use strict'
const axios = require("axios")
const { response } = require('express')

const CountryData = require('../Models/Country.model')

const getCountryData = async (req, res) => {
  const url = `https://psychonauts-api.herokuapp.com/api/characters?limit=10`
  axios.get(`https://psychonauts-api.herokuapp.com/api/characters?limit=10`).then(response => {
    const CountryDetails = response.data.map(count => {
      return new CountryData(count)
    })

    res.send(CountryDetails)
  }).catch(error => {
    console.log('==============');
    console.log('Error has been catched');
    console.log('==============');
    console.log(error);
  })
}

module.exports = getCountryData