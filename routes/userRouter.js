const express = require('express')
const userRouter = express.Router()
const UserController = require("../controllers/userController")

userRouter.get('/users', UserController.allUsers)

// userRouter.get('/users/add', Controller.addUsers)
// userRouter.post('/users/add', Controller.addUsersPost)


module.exports = userRouter