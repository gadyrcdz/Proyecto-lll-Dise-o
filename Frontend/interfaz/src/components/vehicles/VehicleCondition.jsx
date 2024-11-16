import React, { useState } from "react";

const VehicleCondition = ({ onFormChange }) => {
  const [condition, setCondition] = useState("");
  const [upholstery, setUpholstery] = useState("");

  const handleConditionChange = (value) => {
    setCondition(value);
    onFormChange("estadoGeneral", value);
  };

  const handleUpholsteryChange = (value) => {
    setUpholstery(value);
    onFormChange("tapizado", value);
  };

  return (
    <div className="vehicle-condition-section">
      <h2>Estado del Vehículo</h2>

      <div className="form-group">
        <label htmlFor="condition">Estado General (Escala de 1 a 5):</label>
        <select
          id="condition"
          value={condition}
          onChange={(e) => handleConditionChange(e.target.value)}
          required
        >
          <option value="1">1 - Excelente</option>
          <option value="2">2 - Bueno</option>
          <option value="3">3 - Regular</option>
          <option value="4">4 - Malo</option>
          <option value="5">5 - Muy Dañado</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="upholstery">Tapizado:</label>
        <select
          id="upholstery"
          value={upholstery}
          onChange={(e) => handleUpholsteryChange(e.target.value)}
          required
        >
          <option value="cuero">Cuero</option>
          <option value="plastico">Plástico</option>
          <option value="tela">Tela</option>
        </select>
      </div>
    </div>
  );
};

export default VehicleCondition;
