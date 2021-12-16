'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserProfile.belongsTo(models.User,{foreignKey:"UserId"})
    }
  };
  UserProfile.init({
    name: {type:DataTypes.STRING,
      validate:{
        notEmpty:{msg:'nama harus diisi'}
      }},
    email: {type:DataTypes.STRING,
      validate:{
        isEmail:{msg:'format email tidak valid'},
        notEmpty:{msg:'email harus diisi'}
      }},
    phone: {type:DataTypes.STRING,
      validate:{
        isZero(value){
          if(value[0] === 0){
            throw new Error('tidak perlu menggunakan 0 didepan nomor telepon')
          }
          
        },
        notEmpty:{msg:'email harus diisi'}
      }},
    imageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserProfile',
  });
  return UserProfile;
};