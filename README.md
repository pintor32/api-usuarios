# API Usuarios — Taller Semana 7

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

## 🚀 Setup (hazlo antes de la clase)

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

### 4. Verifica que todo esté listo

La estructura de tu proyecto debe verse así:

```
api-usuarios/
├── node_modules/       ← creado por npm install
├── public/             ← (vacío por ahora)
├── sql/
│   └── init.sql
├── src/
│   ├── controllers/    ← (vacío — lo llenaremos en clase)
│   ├── models/         ← (vacío — lo llenaremos en clase)
│   ├── routes/         ← (vacío — lo llenaremos en clase)
│   └── (server.js y database.js se crearán en clase)
├── .env                ← ya configurado
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 📚 ¿Qué haremos en clase?

Durante los 90 minutos construiremos juntos:

1. **`src/database.js`** — Configuración del pool de conexiones con Sequelize
2. **`src/models/Usuario.js`** — Modelo de la entidad Usuario
3. **`src/controllers/usuarioController.js`** — Lógica CRUD (crear, leer, actualizar, eliminar)
4. **`src/routes/usuarioRoutes.js`** — Rutas REST (GET, POST, PUT, DELETE)
5. **`src/server.js`** — Servidor Express que une todo
6. **`public/index.html`** — Página que consume la API con `fetch`

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

## 💡 Plan B: usar SQLite en lugar de PostgreSQL

Si no logras instalar PostgreSQL a tiempo, puedes usar SQLite (no requiere instalación adicional).
Avísale al profesor al inicio de la clase para que te indique los ajustes al código.

---

**¡Nos vemos en clase!** 🚀
