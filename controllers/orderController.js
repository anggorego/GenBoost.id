const {Trainer,Order,User,UserProfile} = require("../models/index");
const trainerRouter = require("../routes/trainerRouter");
class OrderController{
  static allOrders(req,res){

    res.send('masuk order')
  }

  static orderGenboost(req,res){

    // console.log(req.session);
    // let id = req.session.users.usersId
    // console.log(id);
    let id = req.session.users.usersId
    Trainer.findAll({include:{model:Order}})
    .then(data=>{
      res.render('orderForm',{data,id});
      // res.send(data)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static addOrderPost(req,res){
  // console.log(req.body);

  let userId = req.session.users.usersId
  let {rankGoal,request,TrainerId,inGameId} = req.body
  let input = {rankGoal:rankGoal,request:request,TrainerId:TrainerId,inGameId:inGameId,UserId:userId}
  let totalPrice = 0
  Trainer.findOne({where:{id:TrainerId}})
    .then(data=>{
    totalPrice = data.fee
    input.totalPrice = totalPrice
    return Order.create(input)
    })
    .then(data=>{
      res.redirect('/home')
    })
    .catch(err=>{
      res.send(err)
    })
  }

  static deleteOrder(req,res) {
    let id = req.params.id
    Order.destroy({
      where :{
        id: id
      }
    })
        .then(data =>{
          res.redirect('/home')
        })
        .catch(err =>{
          res.send(err)
        })
  }
}

module.exports = OrderController