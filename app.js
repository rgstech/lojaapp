/*  Script desenvolvido por (developed by): Rodrigo Guimaraes
      Github: github.com/rgstech
      API rest sample with sequelize, jwt  
      License: GPL V2 
*/


const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/index");
const clientesRouter = require("./routes/clientes");
const jwt = require("jsonwebtoken");

const verifyJWT = require('./middlewares/authjwt');

const  blacklist = require('./util/blacklist');

const SECRET = require('./config/globals').SECRET;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// test middleware
// const teste = function (req, res, next) {
//     console.log(' Passei aqui as :', Date.now());
//     next();
//   }



app.use("/login", (req, res) => {

  if (req.body.user == "rodrigo" && req.body.password == "123") { // for test/example only, use a database to authenticate user!
                                                                  // somente para teste/exemplo, use o banco de dados para autenticar o usuario! 
    const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 600 });

    res.json({ auth: true, token });
  }

  res.status(401).end();
  
});



app.use("/logout", (req, res) => { 
   blacklist.push(req.headers['x-access-token']);
   res.json({msg: 'you logout!'});
   
});

app.use("/", indexRouter);
app.use("/clientes", verifyJWT, clientesRouter);

module.exports = app;
