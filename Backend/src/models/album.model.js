const mongoose = require("mongoose")

const albumSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    cover: {
        type:String,
        required: true
    },
    musics:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "music"
        }
    ],
    createdAt:{
        type: Date,
        default: Date.now()
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required: true,
    }
})

const albumModel = mongoose.model("album", albumSchema);

module.exports = albumModel