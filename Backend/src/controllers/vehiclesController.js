const { sql } = require('../config/db');

const obtenerVehiculos = async (req, res) => {
  try {
    const result = await sql.query('SELECT * FROM Vehiculos');
    res.json(result.recordset);
    console.log(result.recordset);
  } catch (error) {
    console.error('Error al obtener los vehículos:', error);
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
};

module.exports = { obtenerVehiculos };
