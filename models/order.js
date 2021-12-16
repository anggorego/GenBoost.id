'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User,{foreignKey:"UserId"})
      Order.belongsTo(models.Trainer,{foreignKey:"TrainerId"})
    }
  };
  Order.init({
    totalPrice: DataTypes.INTEGER,
    rankGoal: {type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:'rankGoal harus diisi'},
        notEmpty:{msg:'rankGoal harus diisi'}
      }},
    request: DataTypes.TEXT,
    isComplete: DataTypes.BOOLEAN,
    inGameId: {type:DataTypes.STRING,
    allowNull:false,
    defaultValue:false,
    validate:{
      notNull:{msg:'inGameId harus diisi'},
      notEmpty:{msg:'inGameId harus diisi'}
    }
    }
  },{
    sequelize,
    hooks: {
      beforeCreate(instance,option){
        instance.isComplete = false
      }
    },
    modelName: 'Order',
  });
  return Order;
};