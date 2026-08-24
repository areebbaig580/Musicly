const musicModel = require("../models/music.model");
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
    const { title, musics } = req.body

    const album = await albumModel.create({
        title,
        musics,
        artist: req.user.id
    })

    res.status(201).json({
        message: "Album created succesfully",
        album
    })

}

async function getAllMusics(req, res) {
    const musics = await musicModel.find().populate("artist", "username email")

    res.status(200).json({
        message:"Music fetched succesfully",
        musics
    })
}

module.exports = { createMusic, createAlbum , getAllMusics}