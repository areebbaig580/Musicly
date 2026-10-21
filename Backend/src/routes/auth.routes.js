const express = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require('../middlewares/auth.middleware')

const routes = express.Router();

routes.post("/register", authController.registerUser)
routes.post("/login", authController.loginUser)
routes.get("/me",authMiddleware.authUser, authController.getUser)
routes.post("/logout", authController.logoutUser)

module.exports = routes