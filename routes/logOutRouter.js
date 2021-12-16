const express = require('express')
const logOutRouter = express.Router()
const LogOutController = require("../controllers/logoutController")


logOutRouter.get('/logouts', LogOutController.logOut)

// trainerRouter.get('/trainers/add', Controller.addTrainer)
// trainerRouter.post('/trainers/add', Controller.addTrainer)


module.exports = logOutRouter