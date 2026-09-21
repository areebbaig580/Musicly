const musicModel = require("../models/music.model");
const albumModel = require('../models/album.model');


async function getArtistMusics(req, res) {
    try{
        
        const {id} = req.params;
        
        const musics = await musicModel.find({artist : id});
        
        res.status(200).json({
            message:"Music fetched succesfully",
            musics
        })
    }catch(err){
        console.log(err)
    }

}
async function getArtistAlbums(req, res) {
    try{
        
        const {id} = req.params;
        
        const albums = await albumModel.find({artist : id});
        
        res.status(200).json({
            message:"Album fetched succesfully",
            albums
        })
    }catch(err){
        console.log(err)
    }

}

module.exports = {getArtistMusics , getArtistAlbums}