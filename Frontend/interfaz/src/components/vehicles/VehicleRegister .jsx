import React, { useState } from "react";
import BasicInformation from "./BasicInformation";
import SaleOptions from "./SaleOptions";
import PhotoUpload from "./PhotoUpload";
import PhysicalFeatures from "./PhysicalFeatures";
import MechanicalAndEngine from "./MechanicalAndEngine";
import AdditionalFeatures from "./AdditionalFeatures";
import VehicleCondition from "./VehicleCondition";
import "../../assets/vehicleRegister.css";

const VehicleRegister = () => {
  const [formData, setFormData] = useState({
    tipoVehiculo: "",
    marca: "",
    modelo: "",
    ano: "",
    placa: "",
    precio: "",
    negociable: "",
    recibeVehiculo: "",
    asociadoLeasing: "",
    internalPhotos: [],
    externalPhotos: [],
    doors: "",
    largo: "",
    ancho: "",
    alto: "",
    seatMaterial: "",
    motor: "",
    transmission: "",
    is4x4: "",
    electricWindows: "",
    electricMirrors: "",
    rearSensors: "",
    frontSensors: "",
    sideSensors: "",
    reverseCamera: "",
    camera360: "",
    dashboardType: "",
    soundSystem: "",
    estadoGeneral: "",
    tapizado: "",
  });

  const handleFormChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Formulario enviado", formData);
  };

  return (
    <div className="vehicle-register-container">
      <h1 className="vehicle-register-title">Registro de Vehículo</h1>
      <form className="vehicle-register-form" onSubmit={handleSubmit}>
        <BasicInformation onFormChange={handleFormChange} />
        <SaleOptions onFormChange={handleFormChange} />
        <PhotoUpload onFormChange={handleFormChange} />
        <PhysicalFeatures onFormChange={handleFormChange} />
        <MechanicalAndEngine onFormChange={handleFormChange} />
        <AdditionalFeatures onFormChange={handleFormChange} />
        <VehicleCondition onFormChange={handleFormChange} />
        <button type="submit" className="submit-button">
          Registrar Vehículo
        </button>
      </form>
    </div>
  );
};

export default VehicleRegister;
