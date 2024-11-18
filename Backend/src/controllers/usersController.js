const { sql, dbConfig } = require('../config/db'); // Asegúrate de importar tu configuración correctamente

const insertarUsuario = async (req, res) => {
  const {
    tipoIdentificacion,
    numeroIdentificacion,
    nombre,
    apellido1,
    apellido2,
    nacionalidad,
    fechaNacimiento,
    correoElectronico,
    telefono,
    provincia,
    canton,
    distrito,
    contrasena,
  } = req.body;

  try {
    // Conexión a la base de datos
    const pool = await sql.connect(dbConfig);
    console.log('entre');
    // Verificación de existencia del usuario
      try {
        // Lógica para registrar el usuario...
        const resultadoVerificacion = await pool
        .request()
        .input('CorreoElectronico', sql.NVARCHAR(100), correoElectronico)
        .input('Cedula', sql.NVARCHAR(50), numeroIdentificacion)
        .execute('verUS');
        
      } catch (err) {
        if (err.message.includes('El correo electrónico ya está registrado')) {
          // Enviar un error específico para correo duplicado
          return res.status(400).json({ error: 'Correo Electrónico ya registrado, ingresar correo válido' });
        } else if (err.message.includes('La cédula ya está registrada')) {
          // Enviar un error específico para cédula duplicada
          return res.status(400).json({ error: 'Cédula ya registrada, ingresar cédula válida' });
        } else {
          // Manejo general de errores del servidor
          return res.status(500).json({ error: 'Hubo un error al registrar el usuario' });
        }
      }
      

    // Inserción del nuevo usuario si la verificación pasa
    await pool.request()
      .input('TipoIdentificacion', sql.NVARCHAR(50), tipoIdentificacion)
      .input('NumeroIdentificacion', sql.NVARCHAR(50), numeroIdentificacion)
      .input('Nombre', sql.NVARCHAR(100), nombre)
      .input('Apellido1', sql.NVARCHAR(100), apellido1)
      .input('Apellido2', sql.NVARCHAR(100), apellido2)
      .input('Nacionalidad', sql.NVARCHAR(50), nacionalidad)
      .input('FechaNacimiento', sql.DATE, fechaNacimiento)
      .input('CorreoElectronico', sql.NVARCHAR(100), correoElectronico)
      .input('Telefono', sql.NVARCHAR(20), telefono)
      .input('Provincia', sql.NVARCHAR(100), provincia)
      .input('Canton', sql.NVARCHAR(100), canton)
      .input('Distrito', sql.NVARCHAR(100), distrito)
      .input('Contrasena', sql.NVARCHAR(256), contrasena)
      .execute('intoUs');

    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    res.status(500).json({ error: 'Hubo un error al registrar el usuario' });
  }
};

module.exports = { insertarUsuario };
