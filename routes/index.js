const express = require('express')
const indexRouter = express.Router()

const IndexController = require('../controllers/indexController')
const userRouter = require('./userRouter')
const trainerRouter = require('./trainerRouter')
const orderRouter = require('./orderRouter')
const logOutRouter = require('./logOutRouter')

indexRouter.get('/', IndexController.homepage)

indexRouter.use('/', userRouter)
indexRouter.use('/', trainerRouter)
indexRouter.use('/', orderRouter)
indexRouter.use('/', logOutRouter)


module.exports = indexRouter