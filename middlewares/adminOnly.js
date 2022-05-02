const userModel      = require('../models/UserModel');
const userController = require("../controllers/UserController")(userModel);


const adminOnly = (req, res, next) => {
   
  userController.getByUser(req.body.name, (vuser) => {
    
    if (vuser.role.dataValues.role == "admin") {
      return next();

    } else {

      res.status(401).json({message: "somente admin!"});
    }

  });

};

module.exports = adminOnly;
