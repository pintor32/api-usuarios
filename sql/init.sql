-- ============================================================
-- Script de inicialización — Taller Semana 7
-- Ejecutar con un usuario con privilegios (ej: postgres)
-- psql -U postgres -f sql/init.sql
-- ============================================================

CREATE DATABASE taller_bd;
CREATE USER app_taller WITH PASSWORD 'Clave#2026';
GRANT ALL PRIVILEGES ON DATABASE taller_bd TO app_taller;

\c taller_bd
GRANT ALL ON SCHEMA public TO app_taller;

-- Nota: la tabla "usuarios" NO se crea aquí.
-- Sequelize la creará automáticamente con sequelize.sync()
-- cuando iniciemos el servidor en clase.
