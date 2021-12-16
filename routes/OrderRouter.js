const express = require('express')
const orderRouter = express.Router()
const OrderController = require('../controllers/orderController')

orderRouter.get('/orders', OrderController.allOrders)
// orderRouter.get('/orders/add', Controller.addOrder)
// orderRouter.post('/orders/add', Controller.addOrderPost)


module.exports = orderRouter