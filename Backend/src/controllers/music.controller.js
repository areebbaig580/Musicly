const musicModel = require("../models/music.model");
const uploadFile = require("../services/storage.services")
const albumModel = require("../models/album.model")

async function createMusic(req, res) {
    const { title, duration } = req.body
    const musicFile = req.files?.music?.[0];
    const coverFile = req.files?.cover?.[0];
    if (!musicFile || !coverFile) {
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

    if (!file) {
        return res.status(400).json({ message: "cover File required" })
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

    let limit = parseInt(req.query.limit) || 6;
    let page = parseInt(req.query.page) || 1;
    if (limit > 100) limit = 100;
    let skip = (page - 1) * limit;

    const [musics, count] = await Promise.all([
        musicModel.find().skip(skip).limit(limit).populate("artist", "username"),
        musicModel.countDocuments()
    ]);

    res.status(200).json({
        message: "Music fetched succesfully",
        musics,
        pagination: {
            page,
            limit,
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            hasNextPage: page * limit < count,
            hasPrevPage: page > 1
        }
    })
}

async function getAllAlbums(req, res) {
    let limit = parseInt(req.query.limit) || 6;
    let page = parseInt(req.query.page) || 1;
    if (limit > 100) limit = 100;
    let skip = (page - 1) * limit;

    const [albums, count] = await Promise.all([
        albumModel.find().skip(skip).limit(limit).select('title artist cover').populate("artist", "username"),
        albumModel.countDocuments()
    ]);

    return res.status(200).json({
        message: "Albums fetched successfully",
        album: albums,
        pagination: {
            page,
            limit,
            totalItems: count,
            totalPages: Math.ceil(count / limit),
            hasNextPage: page * limit < count,
            hasPrevPage: page > 1
        }
    })

}

async function getAlbumById(req, res) {
    const albumId = req.params.albumId;

    const album = await albumModel.findById(albumId).populate("artist", "username email").populate("musics")

    res.status(200).json({
        message: "Album fetched successfully",
        album
    })
}

async function deleteMusic(req, res) {
    try {

        const { artistId, id } = req.params;

        const Music = await musicModel.findById(id);

        if (!Music) {
            return res.status(404).json({
                message: 'Music not Found'
            })
        };
    
        if (!Music.artist._id.equals(artistId)) {
            return res.status(401).json({
                message: "Unauthosrised access"
            })
        };

        await musicModel.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Music deleted Succesfully"
        })
    } catch (err) {
        res.status(500).json({
            err
        })
    }

}

module.exports = { createMusic, createAlbum, getAllMusics, getAllAlbums, getAlbumById, deleteMusic }