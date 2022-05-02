const express = require('express');
const router  = express.Router();

const userModel      = require('../models/UserModel');
const userController = require('../controllers/UserController')(userModel);



router.get('/', function(req, res, next) {
 
  userController.getAll( (result) => { res.json(result); } );

});

router.get('/:id', function(req, res, next) {
 
    userController.getById( req.params.id, (result) => { res.json(result); } );
 
});

router.post('/', function(req, res, next) {
 
  let data = req.body;

  userController.create(data, (result) => { res.json(result); } );
 
});

router.put('/', function(req, res, next) {
 
  let data = req.body;

  userController.update(data, (result) => { res.json(result); } );
 
});

router.delete('/:id', function(req, res, next) {
 
    userController.remove(req.params.id, (result) => { res.json(result); } );
 
});





module.exports = router;
