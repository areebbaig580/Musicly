const mongoose = require("mongoose")

const musicSchema = mongoose.Schema({
    uri:{
        type: String,
        required: true
    },
    imageUri:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    duration:{
        type: Number,
        default: 0
    },
    artist:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true
    }
})

const musicModel = mongoose.model("music", musicSchema);

module.exports = musicModel