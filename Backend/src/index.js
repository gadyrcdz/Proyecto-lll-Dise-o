const express = require('express');
const { connectToDB } = require('./config/db');
const vehiculosRoutes = require('./routes/vehiclesRoutes');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors'); // Importa el paquete cors

const app = express();
const PORT = 8080;

// Middleware
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000', // Especifica el origen permitido

}));


// Rutas
app.use('/api', vehiculosRoutes);
app.use('/api', userRoutes);

// Iniciar servidor y conectar a DB
connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
});
