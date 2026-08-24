const express= require("express");
const musicControllers = require("../controllers/music.controller")
const multer = require("multer")

const upload = multer({
    storage: multer.memoryStorage()
})
const route = express.Router();

route.post("/create", upload.single("music"), musicControllers.createMusic)


module.exports = route