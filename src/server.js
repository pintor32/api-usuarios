require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const sequelize = require('./database');
const usuarioRoutes = require('./routes/usuarioRoutes');
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
const usuariosLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: { error: 'Demasiadas peticiones, intenta más tarde.' }
});
app.get('/health', (_req, res) => res.json({ ok: true }));
app.use('/usuarios', usuariosLimiter, usuarioRoutes);
app.use((err, _req, res, _next) => {
  console.error('[error]', err);
  res.status(500).json({ error: 'ERROR_INTERNO' });
});
const PORT = process.env.PORT || 3000;
sequelize.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ No se pudo sincronizar la BD:', err.message);
    process.exit(1);
  });