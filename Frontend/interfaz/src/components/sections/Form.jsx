import React, { useState } from 'react';
import '../../assets/Form.css';


const VehicleFilterForm = ({ onFiltersChange }) => {
  const [tipoVehiculo, setTipoVehiculo] = useState('');
  const [modelo, setModelo] = useState('');
  const [marca, setMarca] = useState('');
  const [motor, setMotor] = useState('');
  const [transmision, setTransmision] = useState('');
  const [precio, setPrecio] = useState('');
  const [año, setAño] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFiltersChange({
      tipo_vehiculo: tipoVehiculo,
      modelo: modelo,
      marca: marca,
      motor: motor,
      transmision: transmision,
      precio: precio ? parseFloat(precio) : null,
      año: año ? parseInt(año) : null,
    });
  };

  // Función para resetear los filtros
  const resetFilters = () => {
    setTipoVehiculo('');
    setModelo('');
    setMarca('');
    setMotor('');
    setTransmision('');
    setPrecio('');
    setAño('');
  };

  return (
    <form onSubmit={handleSubmit} className="filter-form">
      <div className="filter-container">
        <div className="filter-group">
          <label htmlFor="tipoVehiculo">Tipo de Vehículo:</label>
          <input
            type="text"
            id="tipoVehiculo"
            value={tipoVehiculo}
            onChange={(e) => setTipoVehiculo(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="modelo">Modelo:</label>
          <input
            type="text"
            id="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="marca">Marca:</label>
          <input
            type="text"
            id="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="motor">Motor:</label>
          <input
            type="text"
            id="motor"
            value={motor}
            onChange={(e) => setMotor(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="transmision">Transmisión:</label>
          <input
            type="text"
            id="transmision"
            value={transmision}
            onChange={(e) => setTransmision(e.target.value)}
          />
        </div>
        <div className="filter-group">
          <label htmlFor="precio">Precio Máximo:</label>
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className="filter-group year">
          <label htmlFor="año">Año:</label>
          <input
            type="number"
            id="año"
            value={año}
            onChange={(e) => setAño(e.target.value)}
          />
        </div>
      </div>

      <button type="submit" className="filter-submit">Aplicar Filtros</button>
      
      {/* Botón de borrar filtros */}
      <button type="button" className="filter-reset" onClick={resetFilters}>Borrar Filtros</button>
    </form>
  );
};

export default VehicleFilterForm;
