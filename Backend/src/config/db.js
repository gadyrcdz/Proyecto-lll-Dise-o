const sql = require('mssql');

const dbConfig = {
  user: 'sa',
  password: 'Pa55w0rd',
  server: 'localhost',
  database: 'RegistroVehiculosDB',
  port: 1414,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

const connectToDB = async () => {
  try {
    await sql.connect(dbConfig);
    console.log('Conexión a la base de datos exitosa');
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
  }
};

module.exports = { connectToDB, sql };
