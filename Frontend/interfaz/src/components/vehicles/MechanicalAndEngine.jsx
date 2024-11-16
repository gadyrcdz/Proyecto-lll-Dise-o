import React, { useState } from "react";

const MechanicalAndEngine = ({ onFormChange }) => {
  const [motor, setMotor] = useState("");
  const [transmission, setTransmission] = useState("");
  const [is4x4, setIs4x4] = useState("");

  const handleMotorChange = (event) => {
    setMotor(event.target.value);
    onFormChange("motor", event.target.value); // Pasar el tipo de motor al formulario principal
  };

  const handleTransmissionChange = (event) => {
    setTransmission(event.target.value);
    onFormChange("transmission", event.target.value); // Pasar la transmisión al formulario principal
  };

  const handleIs4x4Change = (event) => {
    setIs4x4(event.target.value);
    onFormChange("is4x4", event.target.value); // Pasar la información de 4x4 al formulario principal
  };

  return (
    <div className="mechanical-engine-section">
      <h2>Mecánica y Motor</h2>

      <div className="form-group">
        <label htmlFor="motor">Tipo de Motor:</label>
        <select
          id="motor"
          name="motor"
          value={motor}
          onChange={handleMotorChange}
          required
        >
          <option value="">Seleccione el tipo</option>
          <option value="gasolina">Gasolina</option>
          <option value="diesel">Diésel</option>
          <option value="gasLicuado">Gas Licuado</option>
          <option value="electrico">Eléctrico</option>
          <option value="hibrido">Híbrido</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="transmission">Tipo de Transmisión:</label>
        <select
          id="transmission"
          name="transmission"
          value={transmission}
          onChange={handleTransmissionChange}
          required
        >
          <option value="">Seleccione el tipo</option>
          <option value="manual">Manual</option>
          <option value="automatico">Automático</option>
          <option value="dual">Dual</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="is4x4">¿Es 4x4?</label>
        <select
          id="is4x4"
          name="is4x4"
          value={is4x4}
          onChange={handleIs4x4Change}
          required
        >
          <option value="">Seleccione</option>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
    </div>
  );
};

export default MechanicalAndEngine;
