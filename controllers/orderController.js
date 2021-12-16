const {Trainer,Order,User,UserProfile} = require("../models/index")
class OrderController{
  static allOrders(req,res){

    res.send('masuk order')
  }

  static orderGenboost(req,res){
    Trainer.findAll({include:{model:Order}})
    .then(data=>{
      res.render('orderForm',{data});
      // res.send(data)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static addOrderPost(req,res){
  console.log(req.body);
  let {rankGoal,request,TrainerId,inGameId} = req.body
  let data = {rankGoal:rankGoal,request:request,TrainerId:TrainerId,inGameId:inGameId}
    Order.create(data)
    .then(data=>{
      res.redirect('/home')
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = OrderController