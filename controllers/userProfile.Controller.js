const {Trainer,Order,User,UserProfile} = require("../models/index")

class UserProfileController{

    static allUsersProfile(req,res){
      res.render('registrationForm')
    }

    static addUser(req,res){
      // console.log('masuk');
      res.render('registrationForm')
    }

    static addUserPost(req,res){
      // console.log(req.body)
      let UserId = req.params.id

      let {name,email,phone,imageUrl} = req.body
      let data = {name,email,phone,imageUrl,UserId} 
      UserProfile.create(data)
      .then(data=>{
        // console.log(data);
        res.redirect("/")
       })
       .catch(err=>{
         res.send(err)
       })
    }
}


module.exports = UserProfileController