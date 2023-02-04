const Sequelize = require("sequelize");
const conexion = require("../../conexion/conexion");

const users = conexion.define("grocery_users", {
  id: {
    primaryKey: true,
    type: Sequelize.INTEGER,
    autoIncrement: true,
  },

  name: Sequelize.STRING,
  surname: Sequelize.STRING,
  nickname: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  confirmed: Sequelize.BOOLEAN,
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

module.exports = users;
