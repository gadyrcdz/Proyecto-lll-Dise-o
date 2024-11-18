const { sql } = require('../config/db');

// Función para obtener los vehículos
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

// Función para insertar un nuevo vehículo
const insertarVehiculo = async (req, res) => {
  const {
    tipo_vehiculo,
    marca,
    modelo,
    año,
    placa,
    precio,
    precio_negociable,
    recibe_otros_vehiculos,
    asociado_leasing,
    fotos_internas,
    fotos_externas,
    cantidad_puertas,
    largo,
    ancho,
    alto,
    material_asientos,
    motor,
    transmision,
    es_4x4,
    vidrios_electricos,
    espejos_electricos,
    sensores_traseros,
    sensores_delanteros,
    sensores_laterales,
    camara_retroceso,
    camara_360,
    tablero_mando,
    sistema_sonido,
    estado_general,
    tapizado
  } = req.body;

  console.log(req.body);

  try {
    const pool = await sql.connect(); // Asegúrate de tener configurada la conexión
    const query = `
      INSERT INTO [dbo].[Vehiculos]
        ([tipo_vehiculo], 
         [marca], 
         [modelo], 
         [año], 
         [placa], 
         [precio], 
         [precio_negociable],
         [recibe_otros_vehiculos], 
         [asociado_leasing], 
         [fotos_internas], 
         [fotos_externas], 
         [cantidad_puertas],
         [largo], 
         [ancho], 
         [alto], 
         [material_asientos], 
         [motor], 
         [transmision], 
         [es_4x4], 
         [vidrios_electricos], 
         [espejos_electricos], 
         [sensores_traseros], 
         [sensores_delanteros],
         [sensores_laterales], 
         [camara_retroceso], 
         [camara_360], 
         [tablero_mando], 
         [sistema_sonido], 
         [estado_general], 
         [tapizado])
      VALUES
        (@tipo_vehiculo, 
         @marca, 
         @modelo, 
         @año, 
         @placa, 
         @precio, 
         @precio_negociable, 
         @recibe_otros_vehiculos, 
         @asociado_leasing, 
         @fotos_internas, 
         @fotos_externas, 
         @cantidad_puertas, 
         @largo, 
         @ancho, 
         @alto, 
         @material_asientos, 
         @motor, 
         @transmision, 
         @es_4x4, 
         @vidrios_electricos, 
         @espejos_electricos, 
         @sensores_traseros, 
         @sensores_delanteros, 
         @sensores_laterales, 
         @camara_retroceso, 
         @camara_360, 
         @tablero_mando, 
         @sistema_sonido, 
         @estado_general, 
         @tapizado)
    `;

    const request = pool.request(); // Crear una instancia de la solicitud

    // Agregar los parámetros a la solicitud
    request.input('tipo_vehiculo', sql.NVarChar, tipo_vehiculo);
    request.input('marca', sql.NVarChar, marca);
    request.input('modelo', sql.NVarChar, modelo);
    request.input('año', sql.Int, año);
    request.input('placa', sql.NVarChar, placa);
    request.input('precio', sql.Float, precio);
    request.input('precio_negociable', sql.Bit, precio_negociable);
    request.input('recibe_otros_vehiculos', sql.Bit, recibe_otros_vehiculos);
    request.input('asociado_leasing', sql.Bit, asociado_leasing);
    request.input('fotos_internas', sql.NVarChar, JSON.stringify(fotos_internas));
    request.input('fotos_externas', sql.NVarChar, JSON.stringify(fotos_externas));
    request.input('cantidad_puertas', sql.Int, cantidad_puertas);
    request.input('largo', sql.Float, largo);
    request.input('ancho', sql.Float, ancho);
    request.input('alto', sql.Float, alto);
    request.input('material_asientos', sql.NVarChar, material_asientos);
    request.input('motor', sql.NVarChar, motor);
    request.input('transmision', sql.NVarChar, transmision);
    request.input('es_4x4', sql.Bit, es_4x4);
    request.input('vidrios_electricos', sql.Bit, vidrios_electricos);
    request.input('espejos_electricos', sql.Bit, espejos_electricos);
    request.input('sensores_traseros', sql.Bit, sensores_traseros);
    request.input('sensores_delanteros', sql.Bit, sensores_delanteros);
    request.input('sensores_laterales', sql.Bit, sensores_laterales);
    request.input('camara_retroceso', sql.Bit, camara_retroceso);
    request.input('camara_360', sql.Bit, camara_360);
    request.input('tablero_mando', sql.NVarChar, tablero_mando);
    request.input('sistema_sonido', sql.NVarChar, sistema_sonido);
    request.input('estado_general', sql.Int, estado_general);
    request.input('tapizado', sql.NVarChar, tapizado);

    // Ejecutar la consulta
    await request.query(query);

    res.status(200).json({ message: 'Vehículo insertado correctamente.' });
  } catch (error) {
    console.error('Error al insertar el vehículo:', error);
    res.status(500).send(`Error del servidor: ${error.message}`);
  }
};

module.exports = { obtenerVehiculos, insertarVehiculo };
