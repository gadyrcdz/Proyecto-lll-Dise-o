const express = require('express');
const { connectToDB } = require('./config/db');
const vehiculosRoutes = require('./routes/vehiclesRoutes');

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());

// Rutas
app.use('/api', vehiculosRoutes);

// Iniciar servidor y conectar a DB
connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
