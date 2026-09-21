const express = require('express');
const authMiddleWare = require("../middlewares/auth.middleware")
const artistController = require('../controllers/artist.controller')

const routes = express.Router();

routes.get('/:id/musics',authMiddleWare.authArtist, artistController.getArtistMusics)

module.exports = routes;