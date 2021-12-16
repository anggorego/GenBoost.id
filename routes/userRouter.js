const express = require('express')
const userRouter = express.Router()
const UserController = require("../controllers/userController")

userRouter.get('/users', UserController.allUsers)
userRouter.get('/users/add', UserController.userAdd)
userRouter.post('/users/add', UserController.userAddPost)



module.exports = userRouter