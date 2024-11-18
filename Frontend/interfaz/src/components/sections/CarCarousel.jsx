import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/CarCarousel.css';

const CarCarousel = ({
  tipo_vehiculo = null,
  modelo = null,
  marca = null,
  motor = null,
  transmision = null,
  precio = null,
  año = null
}) => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/vehiculos');
        setVehicles(response.data);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  useEffect(() => {
    // Filtrar vehículos cuando los parámetros cambien
    const applyFilters = () => {
      let filtered = vehicles;

      if (tipo_vehiculo) {
        filtered = filtered.filter(vehicle => vehicle.tipo_vehiculo.toLowerCase() === tipo_vehiculo.toLowerCase());
      }
      if (modelo) {
        filtered = filtered.filter(vehicle => vehicle.modelo.toLowerCase() === modelo.toLowerCase());
      }
      if (marca) {
        filtered = filtered.filter(vehicle => vehicle.marca.toLowerCase() === marca.toLowerCase());
      }
      if (motor) {
        filtered = filtered.filter(vehicle => vehicle.motor.toLowerCase() === motor.toLowerCase());
      }
      if (transmision) {
        filtered = filtered.filter(vehicle => vehicle.transmision.toLowerCase() === transmision.toLowerCase());
      }
      if (precio) {
        filtered = filtered.filter(vehicle => vehicle.precio <= precio);
      }
      if (año) {
        filtered = filtered.filter(vehicle => vehicle.año === año);
      }

      setFilteredVehicles(filtered);
    };

    applyFilters();
  }, [vehicles, tipo_vehiculo, modelo, marca, motor, transmision, precio, año]);

  const settings = {
    dots: true,
    infinite: filteredVehicles.length > 1, // Solo infinito si hay más de un vehículo
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {filteredVehicles.map((vehicle, index) => {
          console.log("autos filtrados: ", filteredVehicles);
          let firstImage = null;
          try {
            const externalPhotos = JSON.parse(vehicle.fotos_externas);
            if (Array.isArray(externalPhotos) && externalPhotos.length > 0) {
              firstImage = externalPhotos[0];
            }
          } catch (error) {
            console.error('Error parsing external photos:', error);
          }

          return (
            <div key={index} className="vehicle-card">
              <div className="vehicle-image-container">
                {firstImage ? (
                  <img src={firstImage} alt={`Vehículo ${vehicle.modelo}`} />
                ) : (
                  <p>Imagen no disponible</p>
                )}
              </div>
              <div className="vehicle-info">
                <h3>{vehicle.marca} {vehicle.modelo} {vehicle.año}</h3>
                <p><strong>Precio:</strong> {vehicle.precio} ₡</p>
                <p><strong>Motor:</strong> {vehicle.motor}</p>
                <p><strong>Transmisión:</strong> {vehicle.transmision}</p>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CarCarousel;
