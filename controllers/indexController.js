const {Trainer,Order,User,UserProfile} = require("../models/index")
const bcrypt = require("bcryptjs")

class IndexController{

    static homepage(req,res){
      res.render('home')
   }
   static homepageafterorder(req,res){
      console.log(req.session);
      let id = req.session.users.usersId
      res.render('homepage',{id})
   }

   static postLogin(req,res){

      const {username, password} = req.body
      User.findOne({
         where:{username : username}
      })
         .then(user => {

            if(user) {
               const isValidPassword = bcrypt.compareSync(password, user.password)
   
               if(isValidPassword) {
                  req.session.users = {usersId: user.dataValues.id}
                  res.redirect('/home')
               } else {
               const error = "Invalid password"
               res.redirect(`/?errors=${error}`)
            }

            } else {
               const error = "Invalid username"
               res.redirect(`/?errors=${error}`)
            }
         })
         .catch(err => {
            res.send(err)
         })
   }
}

module.exports = IndexController
