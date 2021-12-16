const {Trainer,Order,User,UserProfile} = require("../models/index")

class IndexController{

    static homepage(req,res){
      res.render('homepage')
   }
}

module.exports = IndexController
