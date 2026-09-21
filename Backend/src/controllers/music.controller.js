const musicModel = require("../models/music.model");
const uploadFile = require("../services/storage.services")
const albumModel = require("../models/album.model")

async function createMusic(req, res) {
    const { title , duration} = req.body
    const musicFile = req.files?.music?.[0];
    const coverFile = req.files?.cover?.[0];
    if(!musicFile || !coverFile){
        return res.status(400).json({ message: "Both music and cover files are required" });
    }

    const musicResult = await uploadFile(musicFile.buffer.toString("base64"));
    const coverResult = await uploadFile(coverFile.buffer.toString("base64"));

    const music = await musicModel.create({
        uri: musicResult.url,
        imageUri: coverResult.url,
        title,
        duration,
        artist: req.user.id
    })

    res.status(201).json({
        message: "music uploaded sussecfully",
        music
    })

}

async function createAlbum(req, res) {
    const { title, musics } = req.body
    const file = req.file

    if(!file){
        return res.status(400).json({message: "cover File required"})
    }

    const result = await uploadFile(file.buffer.toString('base64'));

    const album = await albumModel.create({
        title,
        musics,
        cover: result.url,
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
    
    const album = await albumModel.find().select("title artist cover").populate("artist", "username email")

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