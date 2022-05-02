//index.js
(async () => {
  const database = require("./db");
  const Cliente = require("../models/ClienteModel");

  // const Users    = require("../models/UserModel");
  // const Role     = require("../models/RoleModel");

  const userModel = require("../models/UserModel");
  const roleModel = require("../models/RoleModel");

  const User = require("../models/User");
  const Role = require("../models/Role");

  // ***************** lines codes just for tests / codigos abaixo somente para testes *******************
  // try {
  //   const resultado = await database.sync();
  //   console.log(resultado);
  // } catch (error) {
  //   console.log(error);
  // }

  // const resultadoCreate = await Cliente.create({
  //   nome: "Joana",
  //   email: "joana@email.com",
  // });
  // console.log(resultadoCreate);

  // const regs = await Cliente.findAll((res) => {
  //   console.log(res);
  // });

  //  const regs = await Users.findAll((res) => {
  //   console.log(res);
  //  });

 

  Role.hasMany(User);
  User.belongsTo(Role);

  const regs = await userModel.findByUser("user", (res) => {
    console.log(res.role.dataValues.role);
  });

  // const regs = await Role.findByRole("admin", (res) => {
  //   console.log(res);
  // });
})();
