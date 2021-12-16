const {Trainer,Order,User,UserProfile} = require("../models/index")
class UserController{

  static allUsers(req,res){
    res.send('masuk user')
  }
}

module.exports = UserController