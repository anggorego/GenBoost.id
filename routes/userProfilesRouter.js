const express = require('express')
const userProfileRouter = express.Router()
const UserProfileController = require("../controllers/userProfile.Controller")
const OrderController = require("../controllers/orderController")
const { getEditForm } = require('../controllers/userProfile.Controller')

userProfileRouter.get('/usersProfiles', UserProfileController.allUsersProfile)
userProfileRouter.get('/userProfiles/edit/:id', UserProfileController.getEditForm)
userProfileRouter.post('/userProfiles/edit/:id', UserProfileController.postEditForm)
userProfileRouter.get('/usersProfiles/add/:id', UserProfileController.addUser)
userProfileRouter.post('/usersProfiles/add/:id', UserProfileController.addUserPost)
userProfileRouter.get('/usersProfiles/add/:id/order', OrderController.orderGenboost)
// userRouter.post('/users/add', Controller.addUsersPost)


module.exports = userProfileRouter