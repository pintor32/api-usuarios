# API Usuarios

Proyecto base para el taller de **Conexiones, Pool, CRUD y API REST** con Node.js, Sequelize y PostgreSQL.

## 📋 Requisitos

Antes de empezar, asegúrate de tener instalado:

- **Node.js 20** o superior — [descargar](https://nodejs.org/)
- **PostgreSQL 14** o superior — [descargar](https://www.postgresql.org/download/)
- Un editor de código (VS Code recomendado)
- **Postman** o **Thunder Client** (extensión de VS Code) para probar la API

Verifica las versiones con:

```bash
node -v
npm -v
psql --version
```

## 🚀 Setup

### 1. Instalar dependencias de Node

Abre una terminal dentro de esta carpeta y ejecuta:

```bash
npm install
```

Esto descargará Express, Sequelize, pg y dotenv.

### 2. Crear la base de datos en PostgreSQL

Conéctate a PostgreSQL con un usuario administrador (normalmente `postgres`) y ejecuta el script de inicialización:

```bash
psql -U postgres -f sql/init.sql
```

O manualmente en `psql` o pgAdmin, ejecuta el contenido de `sql/init.sql`.

### 3. Configurar variables de entorno

Copia el archivo de ejemplo y ajusta las credenciales si las cambiaste:

**Linux / Mac:**
```bash
cp .env.example .env
```

**Windows:**
```bash
copy .env.example .env
```

Abre `.env` y verifica que los valores correspondan a tu instalación de PostgreSQL.


## ▶️ Cómo ejecutar el proyecto (una vez tengamos el código)

```bash
npm run dev
```

El servidor arrancará en `http://localhost:3000`.

## 🆘 Problemas comunes

**`npm install` falla:**
Asegúrate de tener Node.js 20+ instalado.

**`psql: command not found`:**
PostgreSQL no está en el PATH. Busca el instalador de PostgreSQL y reinstala marcando "Add to PATH".

**Error al conectar con PostgreSQL:**
Verifica que el servicio de PostgreSQL esté corriendo:
- **Windows:** Servicios → `postgresql-x64-16` → Iniciar
- **Mac:** `brew services start postgresql`
- **Linux:** `sudo systemctl start postgresql`

**Credenciales incorrectas:**
Revisa que los valores en `.env` coincidan con lo que configuraste al instalar PostgreSQL.
