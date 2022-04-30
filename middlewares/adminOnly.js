
const adminOnly = (req, res, next) => {

  if (req.user && req.user.role === "admin") return next();

  res.status(401).end();

};

module.exports = adminOnly; 
