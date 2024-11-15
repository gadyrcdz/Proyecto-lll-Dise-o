import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  // Importar Router y Routes
import './App.css';
import Users from './components/userRegister/users';  // Importar el componente Users (registro de usuarios)
// import Vehicles from './components/vehicleRegister/Vehicles';  // Importar el componente de registro de vehículos (si lo tienes)

function App() {
    return (
        <Router>  {/* Añadir Router aquí */}
            <div className="container">
                {/* Header con la navegación */}
                <header className="header">
                    <nav className="nav">
                        <ul>
                            <li><Link to="/">Inicio</Link></li>  {/* Enlace a la página de inicio */}
                            <li><a href="#about">Sobre Nosotros</a></li>
                            <li><a href="#contact">Contacto</a></li>
                        </ul>
                    </nav>
                </header>

                {/* Header adicional con el logo y botones */}
                <div className="action-header">
                    <div className="logo">
                        <img src="Logo.png" alt="Logo" />
                    </div>
                    <div className="button-group">
                        <Link to="/register-user">
                            <button className="btn buy-btn">Registro de Usuarios</button>
                        </Link>
                        <Link to="/register-vehicle">
                            <button className="btn quote-btn">Registro de Vehiculos</button>
                        </Link>
                    </div>
                </div>

                {/* Definir las rutas */}
                <Routes>
                    <Route path="/"  />  {/* Ruta para la página principal */}
                    <Route path="/register-user" element={<Users />} />  {/* Ruta para el registro de usuarios */}
                    {/* <Route path="/register-vehicle" element={<Vehicles />} />  Ruta para el registro de vehículos */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
