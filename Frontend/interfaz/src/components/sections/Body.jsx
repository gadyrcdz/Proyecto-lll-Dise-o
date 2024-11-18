import React, { useState } from 'react';
import VehicleFilterForm from './Form'; // Cambio de nombre para coincidir con tu form
import CarCarousel from './CarCarousel';

const Body = () => {
  // Estado para manejar los filtros
  const [filters, setFilters] = useState({
    tipo_vehiculo: null,
    modelo: null,
    marca: null,
    motor: null,
    transmision: null,
    precio: null,
    año: null,
  });

  // Función para manejar el cambio de filtros
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <h1>Bienvenido al Sistema de Búsqueda de Vehículos</h1>
      <VehicleFilterForm onFiltersChange={handleFiltersChange} />
      <CarCarousel 
        tipo_vehiculo={filters.tipo_vehiculo}
        modelo={filters.modelo}
        marca={filters.marca}
        motor={filters.motor}
        transmision={filters.transmision}
        precio={filters.precio}
        año={filters.año}
      />
    </div>
  );
};

export default Body;
