const Usuario = require('../models/Usuario');
const { Op } = require('sequelize');

// 🔹 CREATE — POST /usuarios
const crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = await Usuario.create(req.body);
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: 'Error al crear usuario', detalle: error.message });
  }
};
// 🔹 READ lista — GET /usuarios
const obtenerUsuarios = async (req, res) => {
  try {
    const emailBusqueda = req.query.email ? req.query.email.trim() : null;
    let where = {};
    if (emailBusqueda) {
      where.email = {
        [Op.iLike]: `%${emailBusqueda}%`
      };
    }
    const { count, rows } = await Usuario.findAndCountAll({
      where,
      limit: parseInt(req.query.limit) || 10,
      offset: parseInt(req.query.offset) || 0
    });
    res.json({
      data: rows,
      total: count,
      limit: parseInt(req.query.limit) || 10,
      offset: parseInt(req.query.offset) || 0
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Error al obtener usuarios' });
  }
};
// 🔹 READ uno — GET /usuarios/:id
const obtenerUsuarioPorId = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Error en la consulta' });
  }
};
// 🔹 UPDATE — PUT /usuarios/:id
const actualizarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await usuario.update(req.body);
    res.json(usuario);
  } catch (error) {
    res.status(400).json({ error: 'Error al actualizar usuario' });
  }
};
// 🔹 DELETE — DELETE /usuarios/:id
const eliminarUsuario = async (req, res) => {
  try {
    const usuario = await Usuario.findByPk(req.params.id);
    if (!usuario) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }
    await usuario.destroy();
    res.json({ mensaje: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar usuario' });
  }
};
module.exports = {
  crearUsuario,
  obtenerUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario,
  eliminarUsuario
};