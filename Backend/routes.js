const express = require('express');
const mssql = require('mssql');
const router = express.Router();
module.exports = router;




// Configuración de la base de datos
const dbConfig = {
  user: 'sa',
  password: '010203',
  server: 'DESKTOP-22NIGCB',
  database: 'RegistroVehiculosDB',
  options: {
    trustServerCertificate: true,
    enableArithAbort: true
  }
};


// Tu código de configuración de rutas aquí
router.get('/', (req, res) => {
    res.send('¡Hola desde la API!');
  });