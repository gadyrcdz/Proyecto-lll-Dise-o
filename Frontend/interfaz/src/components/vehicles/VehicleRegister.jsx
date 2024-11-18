import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Swal from 'sweetalert2';
import BasicInformation from "./BasicInformation";
import SaleOptions from "./SaleOptions";
import PhysicalFeatures from "./PhysicalFeatures";
import MechanicalAndEngine from "./MechanicalAndEngine";
import AdditionalFeatures from "./AdditionalFeatures";
import VehicleCondition from "./VehicleCondition";
import "../../assets/vehicleRegister.css";
import Cloudinary from "./Cloudinary";

const VehicleRegister = () => {
  const navigate = useNavigate();

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

  const mapFormData = () => {
    return {
      tipo_vehiculo: formData.tipoVehiculo,
      marca: formData.marca,
      modelo: formData.modelo,
      año: parseInt(formData.ano, 10) || null,
      placa: formData.placa,
      precio: parseFloat(formData.precio) || null,
      precio_negociable: formData.negociable.toLowerCase() === "si",
      recibe_otros_vehiculos: formData.recibeVehiculo.toLowerCase() === "si",
      asociado_leasing: formData.asociadoLeasing.toLowerCase() === "si",
      fotos_internas: formData.internalPhotos,
      fotos_externas: formData.externalPhotos,
      cantidad_puertas: parseInt(formData.doors, 10) || null,
      largo: parseFloat(formData.largo) || null,
      ancho: parseFloat(formData.ancho) || null,
      alto: parseFloat(formData.alto) || null,
      material_asientos: formData.seatMaterial,
      motor: formData.motor,
      transmision: formData.transmission,
      es_4x4: formData.is4x4.toLowerCase() === "si",
      vidrios_electricos: formData.electricWindows.toLowerCase() === "si",
      espejos_electricos: formData.electricMirrors.toLowerCase() === "si",
      sensores_traseros: formData.rearSensors.toLowerCase() === "si",
      sensores_delanteros: formData.frontSensors.toLowerCase() === "si",
      sensores_laterales: formData.sideSensors.toLowerCase() === "si",
      camara_retroceso: formData.reverseCamera.toLowerCase() === "si",
      camara_360: formData.camera360.toLowerCase() === "si",
      tablero_mando: formData.dashboardType,
      sistema_sonido: formData.soundSystem,
    estado_general: (() => {
      const estado = parseInt(formData.estadoGeneral, 10);
      return estado >= 1 && estado <= 5 ? estado : null;
    })(),
      tapizado: formData.tapizado,
    };
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const formattedData = mapFormData();
    console.log("Datos formateados:", formattedData);
  
    try {
      const response = await axios.post("http://localhost:8080/api/vehiculos", formattedData);
      console.log("Respuesta del servidor:", response.data);
  
      // Mostrar una alerta de éxito con SweetAlert2
      Swal.fire({
        title: '¡Éxito!',
        text: 'Vehículo registrado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => {
        // Redirigir al inicio
        navigate('/');
      });
    } catch (error) {
      console.error("Error al registrar el vehículo:", error);
  
      // Mostrar una alerta de error con SweetAlert2
      Swal.fire({
        title: 'Error',
        text: 'Ocurrió un error al registrar el vehículo.',
        icon: 'error',
        confirmButtonText: 'Intentar de nuevo'
      });
    }
  };  

  return (
    <div className="vehicle-register-container">
      <h1 className="vehicle-register-title">Registro de Vehículo</h1>
      <form className="vehicle-register-form" onSubmit={handleSubmit}>
        <BasicInformation onFormChange={handleFormChange} />
        <SaleOptions onFormChange={handleFormChange} />
        <Cloudinary onFormChange={handleFormChange} />
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
