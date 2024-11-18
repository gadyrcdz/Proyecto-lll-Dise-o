import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import '../../assets/App.css';

const Header = () => {
    // Estado para controlar la visibilidad de los modales y el menú hamburguesa
    const [showAboutModal, setShowAboutModal] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);  // Estado para controlar si el menú está abierto

    // Funciones para abrir y cerrar los modales
    const toggleAboutModal = () => setShowAboutModal(!showAboutModal);
    const toggleContactModal = () => setShowContactModal(!showContactModal);
    const toggleMenu = () => setMenuOpen(!menuOpen);  // Alternar visibilidad del menú hamburguesa

    return (
        <>
            <header className="header">
                {/* Menu de navegación */}
                <nav className={`nav ${menuOpen ? 'show' : ''}`}>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><a href="#about" onClick={toggleAboutModal}>Sobre Nosotros</a></li>
                        <li><a href="#contact" onClick={toggleContactModal}>Contacto</a></li>
                    </ul>
                </nav>
                
                {/* Botón hamburguesa */}
                <button className={`hamburger ${menuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </button>
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

            {/* Modal de información sobre nosotros */}
            {showAboutModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleAboutModal}>&times;</span>
                        <h2>Sobre Nosotros</h2>
                        <p>Somos una empresa dedicada al registro y gestión de vehículos. Nuestro objetivo es proporcionar un servicio eficiente y fácil de usar para nuestros clientes.Pagina estudiantil, sello TEC</p>
                    </div>
                </div>
            )}

            {/* Modal de contacto */}
            {showContactModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleContactModal}>&times;</span>
                        <h2>Contacto</h2>
                        <p>Para más información, contáctanos al <strong>(+506) 8599-4094</strong></p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;
