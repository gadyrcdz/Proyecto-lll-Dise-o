import React, { useState } from "react";

const AdditionalFeatures = ({ onFormChange }) => {
  const [electricWindows, setElectricWindows] = useState("");
  const [electricMirrors, setElectricMirrors] = useState("");
  const [rearSensors, setRearSensors] = useState("");
  const [frontSensors, setFrontSensors] = useState("");
  const [sideSensors, setSideSensors] = useState("");
  const [reverseCamera, setReverseCamera] = useState("");
  const [camera360, setCamera360] = useState("");
  const [dashboardType, setDashboardType] = useState("");
  const [soundSystem, setSoundSystem] = useState("");

  const handleChange = (name, value) => {
    switch (name) {
      case "electricWindows":
        setElectricWindows(value);
        onFormChange("electricWindows", value);
        break;
      case "electricMirrors":
        setElectricMirrors(value);
        onFormChange("electricMirrors", value);
        break;
      case "rearSensors":
        setRearSensors(value);
        onFormChange("rearSensors", value);
        break;
      case "frontSensors":
        setFrontSensors(value);
        onFormChange("frontSensors", value);
        break;
      case "sideSensors":
        setSideSensors(value);
        onFormChange("sideSensors", value);
        break;
      case "reverseCamera":
        setReverseCamera(value);
        onFormChange("reverseCamera", value);
        break;
      case "camera360":
        setCamera360(value);
        onFormChange("camera360", value);
        break;
      case "dashboardType":
        setDashboardType(value);
        onFormChange("dashboardType", value);
        break;
      case "soundSystem":
        setSoundSystem(value);
        onFormChange("soundSystem", value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="additional-features-section">
      <h2>Características Adicionales</h2>

      <div className="form-group">
        <label htmlFor="electricWindows">Vidrios Eléctricos:</label>
        <select
          id="electricWindows"
          value={electricWindows}
          onChange={(e) => handleChange("electricWindows", e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="electricMirrors">Espejos Eléctricos:</label>
        <select
          id="electricMirrors"
          value={electricMirrors}
          onChange={(e) => handleChange("electricMirrors", e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="rearSensors">Sensores de Proximidad Traseros:</label>
        <select
          id="rearSensors"
          value={rearSensors}
          onChange={(e) => handleChange("rearSensors", e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="frontSensors">Sensores de Proximidad Delanteros:</label>
        <select
          id="frontSensors"
          value={frontSensors}
          onChange={(e) => handleChange("frontSensors", e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="sideSensors">Sensores de Proximidad Laterales:</label>
        <select
          id="sideSensors"
          value={sideSensors}
          onChange={(e) => handleChange("sideSensors", e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="reverseCamera">Cámara de Retroceso:</label>
        <select
          id="reverseCamera"
          value={reverseCamera}
          onChange={(e) => handleChange("reverseCamera", e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="camera360">Cámara 360 grados:</label>
        <select
          id="camera360"
          value={camera360}
          onChange={(e) => handleChange("camera360", e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="dashboardType">Tablero de Mando:</label>
        <select
          id="dashboardType"
          value={dashboardType}
          onChange={(e) => handleChange("dashboardType", e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="analog">Análogo</option>
          <option value="digital">100% táctil</option>
          <option value="both">Ambos</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="soundSystem">Sistema de Sonido:</label>
        <select
          id="soundSystem"
          value={soundSystem}
          onChange={(e) => handleChange("soundSystem", e.target.value)}
          required
        >
          <option value="">Seleccione</option>
          <option value="estereo7_1">Estéreo 7.1</option>
          <option value="estandar">Estándar</option>
        </select>
      </div>
    </div>
  );
};

export default AdditionalFeatures;
