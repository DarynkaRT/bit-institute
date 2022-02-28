//recuerden que estas rutas las unimos en api.js

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

router.post('/usuario', usuarioController.crearUsuario);
router.post('/usuarioV', usuarioController.obtenerUsuarios);

module.exports = router;
