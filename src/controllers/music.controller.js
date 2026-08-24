const musicModel = require("../models/music.model");
const jwt = require("jsonwebtoken")
const uploadFile = require("../services/storage.services")
const albumModel = require("../models/album.model")

async function createMusic(req, res){

    const token =  req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Invalid user"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if(decoded.role!=="artist"){
            return res.status(401).json({message: "Unauthosised user"});
        }

        const {title} = req.body
        const file = req.file

        const result = await uploadFile(file.buffer.toString("base64"))

        const music = await musicModel.create({
            uri: result.url,
            title,
            artist : decoded.id
        })

        res.status(201).json({
            message:"music uploaded sussecfully",
            music
        })



    }catch(err){
        console.log(err)

        return res.status(401).json({message: "Invalid user"})
    }


}

async function createAlbum(req , res){
    
    
}

module.exports = {createMusic}