import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './assets/App.css';
import Header from './components/sections/Header';
import Body from './components/sections/Body';
import Users from './components/userRegister/users';
import VehicleRegister from './components/vehicles/VehicleRegister';

function App() {
    return (
        <Router>
            <div className="container">
                <Header />

                {/* Definir las rutas */}
                <Routes>
                    <Route path="/" element={<Body />} /> {/* Ruta para la página principal */}
                    <Route path="/register-user" element={<Users />} /> {/* Ruta para el registro de usuarios */}
                    <Route path="/register-vehicle" element={<VehicleRegister />} /> {/* Ruta para el registro de vehículos */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
