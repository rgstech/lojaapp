const Role = require("./Role");

class RoleModel {

  async findAll(callback) {

    const resdata = await Role.findAll({ raw: true });
    
    callback(resdata);

  }

  async find(_id, callback) {

    const resdata = await Role.findAll({ where: { id: _id } });

    callback(resdata);

  }

  async findByRole(_role, callback) {

    const resdata =  await Role.findOne( { where: { role: _role }} );

    callback(resdata);

  }


  async create(data, callback) {

    const resdata = await Role.create(data);
    callback(resdata);

  }

  async update(data, callback) {

    const resdata = await Role.update(
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

    const resdata = await Role.destroy({
      where: {
        id: _id,
      },
    });
    callback(resdata);
    
  }
}

module.exports = new RoleModel();
