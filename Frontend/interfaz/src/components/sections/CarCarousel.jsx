import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/CarCarousel.css';

const CarCarousel = () => {
    const [vehicles, setVehicles] = useState([]);
  
    useEffect(() => {
      const fetchVehicles = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/vehiculos');
          setVehicles(response.data);
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching vehicles:', error);
        }
      };
  
      fetchVehicles();
    }, []);
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
  
    return (
      <div className="carousel-container">
        <Slider {...settings}>
          {vehicles.map((vehicle, index) => {
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
                {firstImage ? (
                  <img src={firstImage} alt={`Vehículo ${vehicle.modelo}`} />
                ) : (
                  <p>Imagen no disponible</p>
                )}
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