//const axios   = require("axios");
const Cliente = require("./Cliente");

class ClienteModel {

  async findAll(callback) {

    const resdata = await Cliente.findAll({ raw: true });
    callback(resdata);

  }

  async find(_id, callback) {

    const resdata = await Cliente.findAll({ where: { id: _id } });

    callback(resdata);

  }

  async create(data, callback) {

    const resdata = await Cliente.create(data);
    callback(resdata);

  }

  async update(data, callback) {

    //const cliente =  await Cliente.update({ nome: data.nome, email: data.email }, {
    const resdata = await Cliente.update(
      { ...data },
      {
        where: {
          id: data.id,
        },
      }
    );

    callback(resdata);

  }

  async remove(_id, callback) {

    const resdata = await Cliente.destroy({
      where: {
        id: _id,
      },
    });
    callback(resdata);
    
  }
}

module.exports = new ClienteModel();
