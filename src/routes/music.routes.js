const express= require("express");
const musicControllers = require("../controllers/music.controller")
const multer = require("multer")
const authMiddleWare = require("../middlewares/auth.middleware")

const upload = multer({
    storage: multer.memoryStorage()
})
const route = express.Router();

route.post("/create",authMiddleWare, upload.single("music"), musicControllers.createMusic)
route.post("/create-album",authMiddleWare, musicControllers.createAlbum)


module.exports = route