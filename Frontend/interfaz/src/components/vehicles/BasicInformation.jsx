import React, { useRef } from "react";

const BasicInformation = ({ onFormChange }) => {
  const tipoVehiculoRef = useRef(null);
  const marcaRef = useRef(null);
  const modeloRef = useRef(null);
  const anoRef = useRef(null);
  const placaRef = useRef(null);
  const precioRef = useRef(null);
  const negociableRef = useRef(null);

  const handleInvalid = (e, message) => {
    e.target.setCustomValidity(message);
  };

  const handleInputChange = (e) => {
    e.target.setCustomValidity("");
    const { name, value } = e.target;
    onFormChange(name, value); // Enviar la información al componente padre
  };

  return (
    <div className="basic-information-section">
      <h2>Información Básica</h2>
      <div className="form-group">
        <label>Tipo de vehículo:</label>
        <select
          ref={tipoVehiculoRef}
          name="tipoVehiculo"
          required
          onInvalid={(e) => handleInvalid(e, "Por favor, selecciona un tipo de vehículo")}
          onChange={handleInputChange}
        >
          <option value="">Selecciona un tipo</option>
          <option value="sedan">Sedán</option>
          <option value="camionetas">Camionetas</option>
          <option value="sedan_lujo">Sedán de lujo</option>
          <option value="suv">SUV</option>
          <option value="minivan">Miniván</option>
        </select>
      </div>
      <div className="form-group">
        <label>Marca:</label>
        <input
          ref={marcaRef}
          name="marca"
          type="text"
          placeholder="Marca del vehículo"
          required
          onInvalid={(e) => handleInvalid(e, "La marca es obligatoria")}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Modelo:</label>
        <input
          ref={modeloRef}
          name="modelo"
          type="text"
          placeholder="Modelo del vehículo"
          required
          onInvalid={(e) => handleInvalid(e, "El modelo es obligatorio")}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Año:</label>
        <input
          ref={anoRef}
          name="ano"
          type="number"
          min="1900"
          max="2024"
          required
          onInvalid={(e) => handleInvalid(e, "El año es obligatorio y debe estar entre 1900 y 2024")}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Placa:</label>
        <input
          ref={placaRef}
          name="placa"
          type="text"
          placeholder="ABC123"
          required
          onInvalid={(e) => handleInvalid(e, "La placa es obligatoria")}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Precio en colones:</label>
        <input
          ref={precioRef}
          name="precio"
          type="number"
          placeholder="Precio"
          required
          onInvalid={(e) => handleInvalid(e, "El precio es obligatorio")}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>¿Es negociable el precio?</label>
        <select
          ref={negociableRef}
          name="negociable"
          required
          onInvalid={(e) => handleInvalid(e, "Por favor, selecciona si es negociable o no")}
          onChange={handleInputChange}
        >
          <option value="">Selecciona una opción</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
    </div>
  );
};

export default BasicInformation;
