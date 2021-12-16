const {Trainer,Order,User,UserProfile} = require("../models/index")
const symbolRp = require("../helpers/priceCurrency")

class TrainerController{

  static trainersLists(req,res){
    let id = req.session.users.usersId
    let parameter = {
      include: {
        model : Order
      }
    }
    if(req.query.sort){
      if(req.query.sort === 'termahal'){
        parameter.order = [['fee','DESC']]
      }else if(req.query.sort === 'termurah') {
        parameter.order = [['fee','ASC']]
      }
    }
    Trainer.findAll(parameter)

    .then(data=>{
      // res.send(data)
      res.render('trainerList', {data,symbolRp,id})
    })
    .catch(err=>{
      res.send(err)
    })
  }

  
}

module.exports = TrainerController