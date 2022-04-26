const jwt = require("jsonwebtoken");



const SECRET = require('../config/globals').SECRET;

const blacklist = require("../util/blacklist");

module.exports = (req, res, next) => {

  const token = req.headers["x-access-token"];

  const index = blacklist.findIndex(item => item === token);

  if (index !== -1 ) return res.status(401).end(); 

  jwt.verify(token, SECRET, (err, decoded) => {

    if (err) return res.status(401).end();
    req.userId = decoded.userId;
    next();
    
  });

};
