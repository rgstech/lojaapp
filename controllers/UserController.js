class UserController {

    constructor(UserModel) {
  
      this.model = UserModel;
  
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
  
  module.exports = function (UserModel) {
  
    return new ClienteController(UserModel);
  
  }
  