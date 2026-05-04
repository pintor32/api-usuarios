const express = require('express');
const router = express.Router();
const {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
} = require('../controllers/usuarioController');
const validarApiKey = (req, res, next) => {
  const apiKeyHeader = req.header('X-API-Key');
  const apiKeyValida = process.env.API_KEY;

  if (apiKeyHeader && apiKeyHeader === apiKeyValida) {
    next();
  } else {
    res.status(403).json({ 
      error: 'ACCESO_DENEGADO', 
      message: 'Se requiere una API Key válida para acceder a este recurso.' 
    });
  }
};
router.post('/',      validarApiKey, crearUsuario);
router.get('/',       obtenerUsuarios); 
router.get('/:id',    obtenerUsuarioPorId);
router.put('/:id',    validarApiKey, actualizarUsuario);
router.delete('/:id', validarApiKey, eliminarUsuario); 

module.exports = router;