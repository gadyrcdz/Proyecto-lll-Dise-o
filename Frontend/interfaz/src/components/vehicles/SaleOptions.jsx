import React, { useRef } from "react";

const SaleOptions = ({ onFormChange }) => {
  const recibeVehiculoRef = useRef(null);
  const asociadoLeasingRef = useRef(null);

  const handleInvalid = (e, message) => {
    e.target.setCustomValidity(message);
  };

  const handleInputChange = (e) => {
    e.target.setCustomValidity("");
    const { name, value } = e.target;
    onFormChange(name, value); // Enviar la información al componente padre
  };

  return (
    <div className="sale-options-section">
      <h2>Opciones de Venta</h2>
      <div className="form-group">
        <label>¿Recibe otros vehículos como parte del pago?</label>
        <select
          ref={recibeVehiculoRef}
          name="recibeVehiculo"
          required
          onInvalid={(e) => handleInvalid(e, "Por favor, selecciona si recibe otros vehículos")}
          onChange={handleInputChange}
        >
          <option value="">Selecciona una opción</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="form-group">
        <label>¿El vehículo está asociado a un leasing?</label>
        <select
          ref={asociadoLeasingRef}
          name="asociadoLeasing"
          required
          onInvalid={(e) => handleInvalid(e, "Por favor, selecciona si el vehículo está asociado a un leasing")}
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

export default SaleOptions;
