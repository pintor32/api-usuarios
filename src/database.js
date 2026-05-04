const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './taller.db',
  logging: false,
  pool: {
    max: 10,
    min: 2,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.authenticate()
  .then(() => console.log('✅ Conexión establecida con el pool'))
  .catch(err => console.error('❌ Error de conexión:', err.message));

module.exports = sequelize;