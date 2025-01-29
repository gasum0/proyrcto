const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const db = require('./config/db');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

const userRoutes = require('./routes/users.routes');
app.use('/api/users', userRoutes);

const projectRoutes = require('./routes/projects.routes');
app.use('/api/projects', projectRoutes);

const taskRoutes = require('./routes/tasks.routes');
app.use('/api/tasks', taskRoutes);



// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API Gestión de Proyectos funcionando 🚀');
});

// Configurar el puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
