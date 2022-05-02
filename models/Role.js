const Sequelize = require("sequelize");
const database = require("../db/db");

const Role = database.define(
  "role",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    role: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  },
  {
    timestamps: false,
    //freezeTableName: true,
    tableName: "role",
  }
);

module.exports = Role;
