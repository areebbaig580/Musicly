const express = require("express");
const musicControllers = require("../controllers/music.controller")
const multer = require("multer")
const authMiddleWare = require("../middlewares/auth.middleware")

const upload = multer({
    storage: multer.memoryStorage()
})
const route = express.Router();

route.post("/create", authMiddleWare.authArtist, upload.fields([
    { name: "music", maxCount: 1 },
    { name: "cover", maxCount: 1 },
]), musicControllers.createMusic)
route.post("/create-album", authMiddleWare.authArtist, upload.single('cover'), musicControllers.createAlbum)
route.post("/edit-album/:artistId/:albumId", authMiddleWare.authArtist, musicControllers.editAlbum)
route.get("/", authMiddleWare.authUser, musicControllers.getAllMusics)
route.get("/albums", authMiddleWare.authUser, musicControllers.getAllAlbums)
route.get("/albums/:albumId", authMiddleWare.authUser, musicControllers.getAlbumById)
route.delete('/:artistId/:id', authMiddleWare.authArtist, musicControllers.deleteMusic)
route.delete('/artist/:artistId/album/:albumId', authMiddleWare.authArtist, musicControllers.deleteAlbum)


module.exports = route