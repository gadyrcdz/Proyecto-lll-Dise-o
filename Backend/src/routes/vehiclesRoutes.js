const express = require('express');
const { obtenerVehiculos, insertarVehiculo } = require('../controllers/vehiclesController');
const router = express.Router();

// Ruta para obtener todos los vehículos
router.get('/vehiculos', obtenerVehiculos);

// Ruta para insertar un nuevo vehículo
router.post('/vehiculos', insertarVehiculo);

module.exports = router;
