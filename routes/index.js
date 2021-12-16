const express = require('express')
const indexRouter = express.Router()

const IndexController = require('../controllers/indexController')
const userRouter = require('./userRouter')
const trainerRouter = require('./trainerRouter')
const orderRouter = require('./orderRouter')
const logOutRouter = require('./logOutRouter')
const userProfileRouter = require('./userProfilesRouter')


indexRouter.get('/', IndexController.homepage)
indexRouter.use('/', userRouter)
indexRouter.use('/', userProfileRouter)
indexRouter.post('/', IndexController.postLogin)
indexRouter.use((req,res,next) => {
  if(req.session.users) {
    next()
  } else {
    let errors = "please log in first"
    res.redirect(`/?errors=${errors}`)
  }
})
indexRouter.get('/home',IndexController.homepageafterorder)
indexRouter.use('/', trainerRouter)
indexRouter.use('/', orderRouter)
indexRouter.use('/', logOutRouter)


module.exports = indexRouter