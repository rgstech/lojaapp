class UserController { // not using... for future implementation

    constructor(UserModel) {
  
      this.model = UserModel;
  
    }
  
    getAll(callback) {
  
      this.model.findAll(callback);
  
    }

    getByUser(_name, callback) {

      this.model.findByUser(_name, callback);
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
  
    return new UserController(UserModel);
  
  }
  