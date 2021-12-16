const express = require('express')
const orderRouter = express.Router()
const OrderController = require('../controllers/orderController')

orderRouter.get('/orders', OrderController.orderGenboost)
// orderRouter.get('/orders/add', Controller.addOrder)
orderRouter.post('/orders/add', OrderController.addOrderPost)


module.exports = orderRouter