const express = require('express')
const userProfileRouter = express.Router()
const UserProfileController = require("../controllers/userProfile.Controller")

userProfileRouter.get('/usersProfiles', UserProfileController.allUsersProfile)
userProfileRouter.get('/usersProfiles/add/:id', UserProfileController.addUser)
userProfileRouter.post('/usersProfiles/add/:id', UserProfileController.addUserPost)
// userRouter.post('/users/add', Controller.addUsersPost)


module.exports = userProfileRouter