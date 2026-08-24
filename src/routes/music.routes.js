const express= require("express");
const musicControllers = require("../controllers/music.controller")
const multer = require("multer")
const authMiddleWare = require("../middlewares/auth.middleware")

const upload = multer({
    storage: multer.memoryStorage()
})
const route = express.Router();

route.post("/create",authMiddleWare.authArtist, upload.single("music"), musicControllers.createMusic)
route.post("/create-album",authMiddleWare.authArtist, musicControllers.createAlbum)
route.get("/",authMiddleWare.authUser, musicControllers.getAllMusics)
route.get("/albums",authMiddleWare.authUser, musicControllers.getAllAlbums)
route.get("/albums/:albumId",authMiddleWare.authUser, musicControllers.getAlbumById)


module.exports = route