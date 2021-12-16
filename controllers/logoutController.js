class LogOutController{

  static logOut(req,res){
    req.session.destroy(err=>{
      if(err){
        res.send(err)
      }else{
        res.redirect('/')
      }
    })
    // res.send('masuk logout')
  }
  
}

module.exports = LogOutController
