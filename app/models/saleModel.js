const Sequelize = require("sequelize");
const conexion = require("../../conexion/conexion");

const sale = conexion.define("grocery_sales", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
  },

  name: Sequelize.STRING,
  price: Sequelize.DECIMAL,
  quantity: Sequelize.INTEGER,
  barcode: Sequelize.STRING,
  product_id: Sequelize.INTEGER,
  status: {
    //status of the procces or activity
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  enable: {
    //true if the object is active, this field is has a false value when te user is deleted
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  createdAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updatedAt: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = sale;
