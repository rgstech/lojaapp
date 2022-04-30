//index.js
(async () => {

  const database = require("./db");
  const Cliente  = require("../models/ClienteModel");
  const Users    = require("../models/UserModel");

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

  const regs = await Users.findAll((res) => {
    console.log(res);
  });
  
})();
