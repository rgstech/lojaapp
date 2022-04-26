const express = require('express');
const router = express.Router();

const clienteModel = require('../models/ClienteModel');
const clienteController = require('../controllers/ClienteController')(clienteModel);




router.get('/', function(req, res, next) {
  console.log(req.userId + 'fez esta chamada');
  clienteController.getAll( (result) => { res.json(result); } );

});

router.get('/:id', function(req, res, next) {
 
  clienteController.getById( req.params.id, (result) => { res.json(result); } );
 

});

router.post('/', function(req, res, next) {
 
  let data = req.body;

  clienteController.create(data, (result) => { res.json(result); } ) ;
 
});

router.put('/', function(req, res, next) {
 
  let data = req.body;

  clienteController.update(data, (result) => { res.json(result); } ) ;
 
});

router.delete('/:id', function(req, res, next) {
 
  clienteController.remove(req.params.id, (result) => { res.json(result); } ) ;
 
});





module.exports = router;
