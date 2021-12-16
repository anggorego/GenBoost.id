const express = require('express')
const trainerRouter = express.Router()
const TrainerController = require("../controllers/trainerController")

trainerRouter.get('/trainers',TrainerController.trainersLists)

// trainerRouter.get('/trainers/add', Controller.addTrainer)
// trainerRouter.post('/trainers/add', Controller.addTrainer)


module.exports = trainerRouter