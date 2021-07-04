'use strict'

const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
const cors = require('cors')

require('dotenv').config();
const app = express();
app.use(cors());
app.use(express.json())
const PORT = process.env.PORT || 8081;
const getCountryData = require('./Controllers/Country.Controller')
const Crud = require('./Controllers/Schema.controller')
mongoose.connect('mongodb://localhost:27017/art', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/con', getCountryData)

app.get('/', (req, res) => {
  res.send('server is work')
})

app.post('/con/favorite', Crud.creatFavoriteGame)
app.get('/con/favorite', Crud.getFavoriteGame)
app.delete('/con/favorite/:slug', Crud.deleteFavoriteGame)
app.put('/con/favorite/:slug', Crud.putFavoriteGame)


app.listen(PORT, () => {
  console.log(`Server work on ${PORT}`);
})