const {Trainer,Order,User,UserProfile} = require("../models/index")
class OrderController{
  static allOrders(req,res){
    res.send('masuk order')
  }
}

module.exports = OrderController