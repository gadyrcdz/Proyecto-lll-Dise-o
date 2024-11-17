const express = require('express');
const { obtenerVehiculos } = require('../controllers/vehiclesController');
const router = express.Router();

router.get('/vehiculos', obtenerVehiculos);

module.exports = router;
