import React, { useState } from 'react';
import './usersForms.css'; // Asegúrate de crear y usar un archivo de estilo si lo deseas
import axios from 'axios'; // Asegúrate de instalar axios

function Users() {
  // Estados para almacenar los valores del formulario
  const [tipoIdentificacion, setTipoIdentificacion] = useState('');
  const [numeroIdentificacion, setNumeroIdentificacion] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [correoElectronico, setCorreoElectronico] = useState('');
  const [telefono, setTelefono] = useState('');
  const [provincia, setProvincia] = useState('');
  const [canton, setCanton] = useState('');
  const [distrito, setDistrito] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (
      !tipoIdentificacion ||
      !numeroIdentificacion ||
      !nombre ||
      !apellido1 ||
      !apellido2 ||
      !nacionalidad ||
      !fechaNacimiento ||
      !correoElectronico ||
      !telefono ||
      !provincia ||
      !canton ||
      !distrito ||
      !contrasena
    ) {
      setError('Por favor, rellene todos los campos.');
      return;
    }

    // Enviar los datos al endpoint (backend)
    try {
      const response = await axios.post('http://localhost:8080/api/users', {
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
        contrasena
      });

      setSuccess('Usuario registrado con éxito');
      setError('');
      
      // Limpiar los campos del formulario
      setTipoIdentificacion('');
      setNumeroIdentificacion('');
      setNombre('');
      setApellido1('');
      setApellido2('');
      setNacionalidad('');
      setFechaNacimiento('');
      setCorreoElectronico('');
      setTelefono('');
      setProvincia('');
      setCanton('');
      setDistrito('');
      setContrasena('');

      // Eliminar mensaje de éxito después de 3 segundos
      setTimeout(() => {
        setSuccess('');
      }, 3000);

      console.log('Respuesta del servidor:', response.data);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        // Mostrar el mensaje de error enviado por el backend
        setError(err.response.data.error);
      } else {
        // Mostrar un mensaje genérico si no hay respuesta específica del servidor
        setError('Hubo un error al registrar el usuario');
      }
      console.error('Error al enviar los datos:', err);
    }
  };

  return (
    <div className="user-register-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit} className="form-container">
        <div className="form-group">
          <label htmlFor="tipoIdentificacion">Tipo de Identificación:</label>
          <input
            type="text"
            id="tipoIdentificacion"
            value={tipoIdentificacion}
            onChange={(e) => setTipoIdentificacion(e.target.value)}
            placeholder="Tipo de identificación"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numeroIdentificacion">Número de Identificación:</label>
          <input
            type="text"
            id="numeroIdentificacion"
            value={numeroIdentificacion}
            onChange={(e) => setNumeroIdentificacion(e.target.value)}
            placeholder="Número de identificación"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese su nombre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido1">Primer Apellido:</label>
          <input
            type="text"
            id="apellido1"
            value={apellido1}
            onChange={(e) => setApellido1(e.target.value)}
            placeholder="Primer apellido"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellido2">Segundo Apellido:</label>
          <input
            type="text"
            id="apellido2"
            value={apellido2}
            onChange={(e) => setApellido2(e.target.value)}
            placeholder="Segundo apellido"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="nacionalidad">Nacionalidad:</label>
          <input
            type="text"
            id="nacionalidad"
            value={nacionalidad}
            onChange={(e) => setNacionalidad(e.target.value)}
            placeholder="Nacionalidad"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
          <input
            type="date"
            id="fechaNacimiento"
            value={fechaNacimiento}
            onChange={(e) => setFechaNacimiento(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correoElectronico">Correo Electrónico:</label>
          <input
            type="email"
            id="correoElectronico"
            value={correoElectronico}
            onChange={(e) => setCorreoElectronico(e.target.value)}
            placeholder="Correo electrónico"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            placeholder="Teléfono"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="provincia">Provincia:</label>
          <input
            type="text"
            id="provincia"
            value={provincia}
            onChange={(e) => setProvincia(e.target.value)}
            placeholder="Provincia"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="canton">Cantón:</label>
          <input
            type="text"
            id="canton"
            value={canton}
            onChange={(e) => setCanton(e.target.value)}
            placeholder="Cantón"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="distrito">Distrito:</label>
          <input
            type="text"
            id="distrito"
            value={distrito}
            onChange={(e) => setDistrito(e.target.value)}
            placeholder="Distrito"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contrasena">Contraseña:</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Contraseña"
            required
          />
        </div>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit" className="btn1 submit-btn1">Registrar</button>
      </form>
    </div>
  );
}

export default Users;
