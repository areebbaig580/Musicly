const express = require("express");
const authRoutes = require("./routes/auth.routes")
const musicRoutes = require("./routes/music.routes")
const cookie = require("cookie-parser")
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cookie());
app.use(cors());

app.use("/api/auth", authRoutes)
app.use("/api/music", musicRoutes)


module.exports = app