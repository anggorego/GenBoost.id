const express = require('express')
const userProfileRouter = express.Router()
const UserProfileController = require("../controllers/userProfile.Controller")
const OrderController = require("../controllers/orderController")

userProfileRouter.get('/usersProfiles', UserProfileController.allUsersProfile)
userProfileRouter.get('/usersProfiles/add/:id', UserProfileController.addUser)
userProfileRouter.post('/usersProfiles/add/:id', UserProfileController.addUserPost)
userProfileRouter.get('/usersProfiles/add/:id/order', OrderController.orderGenboost)
// userRouter.post('/users/add', Controller.addUsersPost)


module.exports = userProfileRouter