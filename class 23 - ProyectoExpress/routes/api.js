const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

//usuarios
router.post('/usuarios', usuarioController.crearUsuario);
router.post('/usuarioV', usuarioController.obtenerUsuarios);

module.exports = router;
