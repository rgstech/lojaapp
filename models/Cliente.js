const Sequelize = require("sequelize");
const database = require("../db/db");

const Cliente = database.define(
  "cliente",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
    //freezeTableName: true,
    tableName: "cliente",
  }
);

module.exports = Cliente;
