const mongoose = require("mongoose")

const albumSchema = mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    mucics:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "music"
        }
    ],
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    }
})

const albumModel = mongoose.model("album", albumSchema);

module.exports = albumModel