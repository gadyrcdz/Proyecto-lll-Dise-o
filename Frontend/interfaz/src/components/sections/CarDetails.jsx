import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../assets/CarDetails.css';

const CarDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { vehicle } = location.state || {};

  const [showExtras, setShowExtras] = useState(false);

  if (!vehicle) {
    return <div>Detalles del vehículo no disponibles</div>;
  }

  const {
    marca,
    modelo,
    año,
    precio,
    motor,
    transmision,
    fotos_internas,
    fotos_externas,
    cantidad_puertas,
    largo,
    ancho,
    alto,
    material_asientos,
    es_4x4,
    vidrios_electricos,
    espejos_electricos,
    sensores_traseros,
    sensores_delanteros,
    sensores_laterales,
    camara_retroceso,
    camara_360,
    tablero_mando,
    sistema_sonido,
    estado_general,
    tapizado,
  } = vehicle;

  const renderImages = (images) => {
    const parsedImages = JSON.parse(images);
    return (
      <Slider dots={true} infinite={parsedImages.length > 1} speed={500} slidesToShow={1} slidesToScroll={1}>
        {parsedImages.map((image, index) => (
          <div key={index} className="image-slide">
            <img src={image} alt={`Foto ${index + 1}`} />
          </div>
        ))}
      </Slider>
    );
  };

  // Función para redirigir al módulo de reserva
  const handleReserveClick = () => {
    navigate('/reserva', { state: { vehicle } }); // Redirige a la página de reserva
  };

  return (
    <div className="car-details-container">
      <h1>{marca} {modelo} {año}</h1>
      <p><strong>Precio:</strong> {precio} ₡</p>
      <p><strong>Motor:</strong> {motor}</p>
      <p><strong>Transmisión:</strong> {transmision}</p>
      {/* Botón de reserva */}
      <button className="reserve-button" onClick={handleReserveClick}>
        Reservar
      </button>
      <div className="car-images">
        <h3>Imágenes del vehículo</h3>
        <h4>Fotos internas:</h4>
        {renderImages(fotos_internas)}
        <h4>Fotos externas:</h4>
        {renderImages(fotos_externas)}
      </div>

      <div className="basic-info">
        <h3>Información Básica</h3>
        <p><strong>Tipo de vehículo:</strong> {vehicle.tipo_vehiculo}</p>
        <p><strong>Placa:</strong> {vehicle.placa}</p>
        <p><strong>¿Precio negociable?</strong> {vehicle.precio_negociable ? 'Sí' : 'No'}</p>
      </div>

      <button onClick={() => setShowExtras(!showExtras)}>
        {showExtras ? 'Ocultar Extras' : 'Ver Extras'}
      </button>

      {showExtras && (
        <div className="extra-info">
          <h3>Opciones de Venta</h3>
          <p><strong>Recibe otros vehículos como parte del pago:</strong> {vehicle.recibe_otros_vehiculos ? 'Sí' : 'No'}</p>
          <p><strong>¿Está asociado a un leasing?:</strong> {vehicle.asociado_leasing ? 'Sí' : 'No'}</p>

          <h3>Características Físicas</h3>
          <p><strong>Cantidad de puertas:</strong> {cantidad_puertas}</p>
          <p><strong>Dimensiones:</strong> {largo}m x {ancho}m x {alto}m</p>
          <p><strong>Material de los asientos:</strong> {material_asientos}</p>

          <h3>Mecánica y Motor</h3>
          <p><strong>Motor:</strong> {vehicle.motor}</p>
          <p><strong>Transmisión:</strong> {vehicle.transmision}</p>
          <p><strong>¿Es 4x4?:</strong> {es_4x4 ? 'Sí' : 'No'}</p>

          <h3>Sistemas y Funcionalidades</h3>
          <p><strong>Vidrios eléctricos:</strong> {vidrios_electricos ? 'Sí' : 'No'}</p>
          <p><strong>Espejos eléctricos:</strong> {espejos_electricos ? 'Sí' : 'No'}</p>
          <p><strong>Sensores traseros:</strong> {sensores_traseros ? 'Sí' : 'No'}</p>
          <p><strong>Sensores delanteros:</strong> {sensores_delanteros ? 'Sí' : 'No'}</p>
          <p><strong>Sensores laterales:</strong> {sensores_laterales ? 'Sí' : 'No'}</p>
          <p><strong>Cámara de retroceso:</strong> {camara_retroceso ? 'Sí' : 'No'}</p>
          <p><strong>Cámara 360 grados:</strong> {camara_360 ? 'Sí' : 'No'}</p>
          <p><strong>Tablero de mando:</strong> {tablero_mando}</p>
          <p><strong>Sistema de sonido:</strong> {sistema_sonido}</p>

          <h3>Estado del Vehículo</h3>
          <p><strong>Estado general:</strong> {estado_general} (1: Excelente, 5: Muy dañado)</p>
          <p><strong>Tapizado:</strong> {tapizado}</p>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
