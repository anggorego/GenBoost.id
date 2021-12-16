const {Trainer,Order,User,UserProfile} = require("../models/index")

class TrainerController{

  static trainersLists(req,res){
    Trainer.findAll()
    .then(data=>{
      res.send(data)
    })
    .catch(err=>{
      res.send(err)
    })
  }
}

module.exports = TrainerController