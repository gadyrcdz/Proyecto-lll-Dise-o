import React, { useState } from 'react';
import './usersForms.css'; // Asegúrate de crear y usar un archivo de estilo si lo deseas

function Users() {
  // Estados para almacenar los valores del formulario
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación básica
    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor, rellene todos los campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    // Si la validación pasa, podrías hacer un envío a una API o procesar la información
    setError('');
    console.log('Formulario enviado:', { name, email, password });
    // Aquí puedes hacer lo que sea necesario con la información del formulario
  };

  return (
    <div className="user-register-container">
      <h2>Registro de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese su nombre"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su correo electrónico"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirmar Contraseña:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirme su contraseña"
            required
          />
        </div>

        {error && <p className="error">{error}</p>} {/* Mostrar errores si existen */}

        <button type="submit" className="btn1 submit-btn1">Registrar</button>
      </form>
    </div>
  );
}

export default Users;
