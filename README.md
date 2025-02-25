# proyrcto
# 📌 API de Gestión de Proyectos y Tareas

Esta es una API REST desarrollada en **Node.js** con **Express** y **MySQL** para la gestión de proyectos y tareas dentro de una empresa.

## 🚀 Tecnologías Utilizadas
- **Node.js** + **Express.js**
- **MySQL** (Base de datos relacional)
- **dotenv** (Manejo de variables de entorno)
- **CORS** (Permitir peticiones entre dominios)
- **Nodemon** (Reiniciar el servidor automáticamente en desarrollo)

---

## 👥 Instalación y Configuración

### 🔹 **1. Clonar el repositorio**
```sh
git clone https://github.com/tuusuario/gestion-proyectos-api.git
cd gestion-proyectos-api
```

### 🔹 **2. Instalar dependencias**
Ejecuta el siguiente comando para instalar los paquetes necesarios:
```sh
npm install
```

### 🔹 **3. Configurar la Base de Datos**
1. Asegúrate de tener **MySQL** instalado y ejecutándose.
2. Crea la base de datos en MySQL con el siguiente comando:
   ```sql
   CREATE DATABASE gestion_proyectos;
   ```
3. Importa el esquema de la base de datos desde el archivo **`schema.sql`** (si tienes un script de base de datos).

### 🔹 **4. Configurar variables de entorno**
Crea un archivo `.env` en la raíz del proyecto y agrega lo siguiente (modifica según tu configuración):
```env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_contraseña
DB_NAME=gestion_proyectos
DB_PORT=3306
PORT=5000
```
## ▶️ **Ejecutar el Dump20250129.sql**
---esto es para crear la base de datos 

## ▶️ **Ejecutar la API**

### 🔹 **1. Modo de desarrollo**
Ejecuta el servidor con **Nodemon** (se reinicia automáticamente en cada cambio):
```sh
npm run dev
```

### 🔹 **2. Modo de producción**
Ejecuta la API normalmente:
```sh
npm start
```

---

## 🔥 **Endpoints de la API**
La API cuenta con los siguientes endpoints:

### 📌 **Usuarios (`/api/users`)**
| Método  | Endpoint            | Descripción |
|---------|---------------------|-------------|
| `GET`   | `/api/users`        | Obtener todos los usuarios |
| `GET`   | `/api/users/:id`    | Obtener un usuario por ID |
| `POST`  | `/api/users`        | Crear un usuario |
| `PUT`   | `/api/users/:id`    | Actualizar un usuario |
| `DELETE`| `/api/users/:id`    | Eliminar un usuario |

### 📌 **Proyectos (`/api/projects`)**
| Método  | Endpoint            | Descripción |
|---------|---------------------|-------------|
| `GET`   | `/api/projects`     | Obtener todos los proyectos |
| `GET`   | `/api/projects/:id` | Obtener un proyecto por ID |
| `POST`  | `/api/projects`     | Crear un proyecto |
| `PUT`   | `/api/projects/:id` | Actualizar un proyecto |
| `DELETE`| `/api/projects/:id` | Eliminar un proyecto |

### 📌 **Tareas (`/api/tasks`)**
| Método  | Endpoint            | Descripción |
|---------|---------------------|-------------|
| `GET`   | `/api/tasks`        | Obtener todas las tareas |
| `GET`   | `/api/tasks/:id`    | Obtener una tarea por ID |
| `POST`  | `/api/tasks`        | Crear una tarea |
| `PUT`   | `/api/tasks/:id`    | Actualizar una tarea |
| `DELETE`| `/api/tasks/:id`    | Eliminar una tarea |

---

1. Inicia el servidor (`npm run dev` o `npm start`).
2. Abre tu navegador y ve a:  
   ```
   http://localhost:5000/api-docs
   ```
3. Desde ahí puedes probar todos los endpoints.

---

## 🛠 **Herramientas Recomendadas**
- **Postman** → Para probar los endpoints manualmente.
- **MySQL Workbench** → Para visualizar y gestionar la base de datos.
- **VS Code** → Editor recomendado para el desarrollo.


