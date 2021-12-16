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

    get changeDateFormat() {
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return this.createdAt.toLocaleDateString("en-EN", options)
    }

    get status() {
      if(this.isComplete) {
        return 'Finished'
      } else {
        return 'On Progress'
      }
    }
  };
  Order.init({
    totalPrice: DataTypes.INTEGER,
    rankGoal: {type:DataTypes.STRING,
      allowNull: false,
      validate:{
        notNull:{msg:'rankGoal harus diisi'},
      }},
    request: {
      type:DataTypes.STRING,
      validate:{
      notEmpty:{msg:'inGameId harus diisi'}
    }
    },
    isComplete: DataTypes.BOOLEAN,
    inGameId: {
      type:DataTypes.STRING,
      validate:{
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