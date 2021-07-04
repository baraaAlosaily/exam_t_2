'use strict'

class countrycontroller {
  constructor(dataGame) {
    this.name = dataGame.name;
    this.img = dataGame.img;
    this.gender = dataGame.gender;
    this.psiPowers = dataGame.psiPowers[0].description
  }
}

module.exports = countrycontroller;