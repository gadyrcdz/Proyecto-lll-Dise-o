const express = require('express');
const cors = require('cors'); // Importar cors
const { connectToDB } = require('./config/db');
const vehiculosRoutes = require('./routes/vehiclesRoutes');

const app = express();
const PORT = 8080;

// Middleware para habilitar CORS
app.use(cors({
  origin: 'http://localhost:3000', // Permitir solicitudes desde tu frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
}));

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/api', vehiculosRoutes);

// Iniciar servidor y conectar a DB
connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
