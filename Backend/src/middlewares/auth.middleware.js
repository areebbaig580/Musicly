const { json } = require("express");
const jwt = require("jsonwebtoken")

function authArtist(req, res, next) {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "Invalid user" })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role !== "artist") {
            return res.status(401).json({ message: "Unauthosised user" });
        }
        req.user = decoded;

    } catch (err) {
        console.log(err)
        return res.status(401).json({ message: "unauthorised access" })
    }

    next()
}

function authUser(req, res, next) {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "invalid user" })
    }
    try {

        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        if (decoded.role !== "user") {
            return res.status(401).json({ message: "Invalid user" })
        }

        req.user = decoded;

        next();

    } catch (err) {
        console.log(err)
        return res.status(401).json({ message: "Unauthorised user" })
    }
}

module.exports = { authArtist, authUser }