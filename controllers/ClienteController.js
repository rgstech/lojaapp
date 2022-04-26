class ClienteController {

  constructor(ClienteModel) {

    this.model = ClienteModel;

  }

  getAll(callback) {

    this.model.findAll(callback);

  }

  getById(_id, callback) {

    this.model.find(_id, callback);

  }

  create(data, callback) {

    this.model.create(data, callback);

  }

  update(data, callback) {

    this.model.update(data, callback);

  }

  remove(_id, callback) {

    this.model.remove(_id, callback);
    
  }

}

module.exports = function (ClienteModel) {

  return new ClienteController(ClienteModel);

}
