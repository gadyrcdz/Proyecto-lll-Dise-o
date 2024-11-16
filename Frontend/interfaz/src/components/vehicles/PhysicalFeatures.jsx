import React, { useState } from "react";

const PhysicalFeatures = ({ onFormChange }) => {
  const [doors, setDoors] = useState("");
  const [dimensions, setDimensions] = useState({
    largo: "",
    ancho: "",
    alto: "",
  });
  const [seatMaterial, setSeatMaterial] = useState("");

  const handleDoorsChange = (event) => {
    setDoors(event.target.value);
    onFormChange("doors", event.target.value); // Pasar la cantidad de puertas al formulario principal
  };

  const handleDimensionChange = (event) => {
    const { name, value } = event.target;
    setDimensions((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    onFormChange(name, value); // Pasar las dimensiones al formulario principal
  };

  const handleSeatMaterialChange = (event) => {
    setSeatMaterial(event.target.value);
    onFormChange("seatMaterial", event.target.value); // Pasar el material de los asientos al formulario principal
  };

  return (
    <div className="physical-features-section">
      <h2>Características Físicas</h2>

      <div className="form-group">
        <label htmlFor="doors">Cantidad de puertas:</label>
        <select
          id="doors"
          name="doors"
          value={doors}
          onChange={handleDoorsChange}
          required
        >
          <option value="">Seleccione la cantidad de puertas</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="form-group">
        <label>Dimensiones (metros):</label>
        <div className="dimensions-inputs">
          <div>
            <label htmlFor="largo">Largo:</label>
            <input
              type="number"
              id="largo"
              name="largo"
              value={dimensions.largo}
              onChange={handleDimensionChange}
              required
            />
          </div>
          <div>
            <label htmlFor="ancho">Ancho:</label>
            <input
              type="number"
              id="ancho"
              name="ancho"
              value={dimensions.ancho}
              onChange={handleDimensionChange}
              required
            />
          </div>
          <div>
            <label htmlFor="alto">Alto:</label>
            <input
              type="number"
              id="alto"
              name="alto"
              value={dimensions.alto}
              onChange={handleDimensionChange}
              required
            />
          </div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="seatMaterial">Material de los asientos:</label>
        <select
          id="seatMaterial"
          name="seatMaterial"
          value={seatMaterial}
          onChange={handleSeatMaterialChange}
          required
        >
          <option value="">Seleccione</option>
          <option value="tela">Tela</option>
          <option value="cuero">Cuero</option>
        </select>
      </div>
    </div>
  );
};

export default PhysicalFeatures;
