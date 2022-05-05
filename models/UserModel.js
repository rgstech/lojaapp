const User = require("./User");
const Role = require("./Role");

class UserModel {

  async findAll(callback) {

    const resdata = await User.findAll({ raw: true });
    
    callback(resdata);

  }

  async find(_id, callback) {

    const resdata = await User.findAll({ where: { id: _id } });

    callback(resdata);

  }

  async findByUser(_name, callback) {

    const resdata =  await User.findOne( { where: { name: _name },  include: Role} );

    callback(resdata);

  }


  async create(data, callback) {

    const resdata = await User.create(data);
    callback(resdata);

  }

  async update(data, callback) {

    const resdata = await User.update(
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

    const resdata = await User.destroy({
      where: {
        id: _id,
      },
    });
    callback(resdata);
    
  }
}

module.exports = new UserModel();
