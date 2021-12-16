const express = require('express')
const orderRouter = express.Router()
const OrderController = require('../controllers/orderController')

orderRouter.get('/orders/add/:id', OrderController.orderGenboost)
// orderRouter.get('/orders/add', Controller.addOrder)
orderRouter.post('/orders/add/:id', OrderController.addOrderPost)
orderRouter.get('/orders/delete/:id', OrderController.deleteOrder)


module.exports = orderRouter