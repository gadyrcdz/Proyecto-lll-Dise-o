import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/App.css';

const Header = () => {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><a href="#about">Sobre Nosotros</a></li>
                        <li><a href="#contact">Contacto</a></li>
                    </ul>
                </nav>
            </header>

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
        </>
    );
};

export default Header;
