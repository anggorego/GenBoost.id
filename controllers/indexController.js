const {Trainer,Order,User,UserProfile} = require("../models/index")
const bcrypt = require("bcryptjs")
const priceCurrency = require('../helpers/priceCurrency')

class IndexController{

   static homepage(req,res){

      let error;
      if(req.query.errors){
         error = req.query.errors
      }
      res.render('home',{error})

   }
   static homepageafterorder(req,res){
      let id = req.session.users.usersId
      Order.findAll({
         include :{
            model : Trainer
         },
         where: {
            "UserId" : id
         }
      })
            .then(data => {
               // res.send(data)
               res.render('homepage',{id,data, priceCurrency})
            })
            .catch(err =>{
               res.send(err)
            })
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
               const error = "Invalid password, please try again!"
               res.redirect(`/?errors=${error}`)
            }

            } else {
               const error = "Invalid username, please try again!"
               res.redirect(`/?errors=${error}`)
            }
         })
         .catch(err => {
            res.send(err)
         })
   }

   static showContact(req,res) {
      res.render('contactUs')
   }
}

module.exports = IndexController
