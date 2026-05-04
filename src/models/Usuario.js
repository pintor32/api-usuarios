const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: { isEmail: true }
  },
  edad: {
    type: DataTypes.INTEGER,
    validate: { min: 0, max: 120 }
  }
}, {
  tableName: 'usuarios',
  timestamps: false
});

module.exports = Usuario;