/*  Script desenvolvido por (developed by): Rodrigo Guimaraes
      Github: github.com/rgstech
      API rest sample with sequelize, jwt  
      License: GPL V2 
*/


const express             = require("express");

const path                = require("path");

const cookieParser        = require("cookie-parser");

const logger              = require("morgan");

const indexRouter         = require("./routes/index");

const clientesRouter      = require("./routes/clientes");

const userRouter          = require("./routes/user");

const jwt                 = require("jsonwebtoken");

const verifyJWT           = require('./middlewares/authjwt');

const adminOnly           = require('./middlewares/adminOnly');

const blacklist           = require('./util/blacklist');

const SECRET              = require('./config/globals').SECRET;

const userModel           = require('./models/UserModel');

const userController      = require('./controllers/UserController')(userModel);



const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.use("/login", (req, res) => {




  userController.getByUser(req.body.name, (vuser) => {
        
              if (vuser.dataValues['password'] == req.body.password) {

                const token = jwt.sign({ userId: 1 }, SECRET, { expiresIn: 600 });
     
                res.json({ auth: true, token });

              } else {

                res.status(401).end();
              
              }
              
  });
  
});



app.use("/logout", (req, res) => { 

   blacklist.push(req.headers['x-access-token']);
   res.json({msg: 'you logout!'});

   
});

app.use("/", indexRouter);

app.use("/clientes", verifyJWT, clientesRouter);
app.use("/users", verifyJWT,  adminOnly, userRouter);

module.exports = app;
