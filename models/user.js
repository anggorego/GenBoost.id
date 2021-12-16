'use strict';
const bcryptjs = require("bcryptjs")
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.UserProfile,{foreignKey:"UserId"})
      User.hasMany(models.Order,{foreignKey:"UserId"})
    }
  };
  User.init({
    username: {type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:'username harus diisi'},
        notEmpty:{msg:'username harus diisi'}
      }},
    password: {type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:'password harus diisi'},
        notEmpty:{msg:'password harus diisi'}
      }},
    role: {type:DataTypes.STRING,
    allowNull:false,
    defaultValue:'user'
    }
  }, {
    sequelize,
    hooks: {
      beforeCreate(instance,option){
        const salt = bcryptjs.genSaltSync(10)
        const hash = bcryptjs.hashSync(instance.password,salt)
        instance.password = hash
      }
    },
    modelName: 'User',
  });
  return User;
};