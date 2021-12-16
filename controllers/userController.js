const { Trainer, Order, User, UserProfile } = require("../models/index");
class UserController {
  static allUsers(req, res) {
    res.send("masuk user");
  }

  static userAdd(req, res) {
    res.render("createAccount");
  }

  static userAddPost(req, res) {
    let param;
    //  console.log(req.body);
    let { username, password } = req.body;
    let data = { username: username, password: password };
    User.create(data)
      .then((data) => {
        let id = data.dataValues.id;
        res.render("registrationForm", { id });
      })
      .catch((err) => {
        // err.errors.forEach(el =>{
        //   param.push(el.message)
        // })
        // res.redirect(`/users/add?errors=${param}`)
        res.send(err.errors.map(el => el.message));
      });
  }
}

module.exports = UserController;
