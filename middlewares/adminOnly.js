const userController = require("../controllers/UserController");

const adminOnly = (req, res, next) => {

  userController.getByUser(req.body.name, (vuser) => {
    //console.log(vuser);
    if (vuser.dataValues["role"] == "admin") {
      return next();

    } else {

      res.status(401).json({message: "somente admin!"});
    }

  });

};

module.exports = adminOnly;
