const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8000;
const cors = require('cors');




app.use(cors());


// Configurar CORS
app.use(cors({
  origin: 'http://localhost:3000' // Permitir que solo el frontend acceda a la API
}));

// Importar las rutas desde el archivo routes.js
const routes = require('./routes');


// Usar body-parser para procesar las solicitudes JSON
app.use(bodyParser.json());

// Usar las rutas
app.use('/api', routes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});