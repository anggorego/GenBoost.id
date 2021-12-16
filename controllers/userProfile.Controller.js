const sendMail = require("../helpers/sendMail")
const {Trainer,Order,User,UserProfile} = require("../models/index")
const sendMail = require('../helpers/send-mail')
class UserProfileController{

    static allUsersProfile(req,res){
      res.render('registrationForm')
    }

    static addUser(req,res){
      // console.log('masuk');
      res.render('registrationForm',)
    }

    static addUserPost(req,res){
      // console.log(req.body)
      let UserId = req.params.id

      let {name,email,phone,imageUrl} = req.body
      let data = {name,email,phone,imageUrl,UserId} 
      UserProfile.create(data)
      .then(data=>{
        sendMail(email)
        res.redirect('/')
       })
       .catch(err=>{
        //  eror = err.errors.map(el=>el.message)
        //  console.log(eror);
        res.send(err.errors.map(el=>el.message))
        // res.render("registrationForm",{eror})
       })
    }

    static getEditForm(req,res) {
      
      let id = req.session.users.usersId
      UserProfile.findOne({where:{
        "UserId" : id
      }})
              .then(data => {
                res.render('editForm', {data,id})
              })
              .catch(err => {
                res.send(err)
              }) 
    }

    static postEditForm(req,res) {
      const {name,phone,email,imageUrl} = req.body
      let input = {name,phone,email,imageUrl}
      let id = req.session.users.usersId
      console.log('masuk');
      UserProfile.update({
        
        "name":name,
        "email":email,
        "phone":phone,
        "imageUrl":imageUrl
      },{
        where: {
          "UserId": id
        }
      })
      .then(data =>{
        res.redirect('/home')
      })
      .catch(err =>{
        res.send(err.errors.map(el=>el.message))
      })
  }
}


module.exports = UserProfileController