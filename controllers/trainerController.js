const {Trainer,Order,User,UserProfile} = require("../models/index")
const rp =require("../helpers/priceCurrency")

class TrainerController{

  static trainersLists(req,res){
    Trainer.findAll({
      include: {
        model : Order
      }
    })
    .then(data=>{
      // res.send(data)
      res.render('trainerList', {data},rp)
    })
    .catch(err=>{
      res.send(err)
    })
  }

  
}

module.exports = TrainerController