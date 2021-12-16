const express = require('express')
const indexRouter = express.Router()

const IndexController = require('../controllers/indexController')
const userRouter = require('./userRouter')
const trainerRouter = require('./trainerRouter')
const orderRouter = require('./orderRouter')
const logOutRouter = require('./logOutRouter')
const userProfileRouter = require('./userProfilesRouter')

indexRouter.get('/', IndexController.homepage)
indexRouter.get('/home',IndexController.homepageafterorder)

indexRouter.use('/', userRouter)
indexRouter.use('/', trainerRouter)
indexRouter.use('/', orderRouter)
indexRouter.use('/', logOutRouter)
indexRouter.use('/', userProfileRouter)


module.exports = indexRouter