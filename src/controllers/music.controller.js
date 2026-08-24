const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken")
const uploadFile = require("../services/storage.services")
const albumModel = require("../models/album.model")

async function createMusic(req, res) {
    const { title } = req.body
    const file = req.file

    const result = await uploadFile(file.buffer.toString("base64"))

    const music = await musicModel.create({
        uri: result.url,
        title,
        artist: req.user.id
    })

    res.status(201).json({
        message: "music uploaded sussecfully",
        music
    })

}

async function createAlbum(req, res) {
    const { title , musics} = req.body

    const album = await albumModel.create({
        title,
        musics,
        artist : req.user.id
    })

    res.status(201).json({
        message: "Album created succesfully",
        album
    })

}

module.exports = { createMusic , createAlbum}