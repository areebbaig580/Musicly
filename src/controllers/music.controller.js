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

async function getAllAlbums(req, res) {
    
    const album = await albumModel.find().select("title artist").populate("artist", "username email")

    return res.status(200).json({
        message: "Albums fetched successfully",
        album: album,
    })

}

async function getAlbumById(req, res){
    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate("artist", "username email").populate("musics")

    res.status(200).json({
        message: "Album fetched successfully",
        album
    })
}

module.exports = { createMusic, createAlbum , getAllMusics ,getAllAlbums, getAlbumById}