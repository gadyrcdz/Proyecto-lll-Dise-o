import React from 'react';

import Form from './Form';
import CarCarousel from './CarCarousel';


const Body = () => {
    return (
        <div>
            <h1>Bienvenido al Sistema de Registro de Vehículos</h1>
            <Form />
            <CarCarousel 
                tipo_vehiculo={null}
                modelo={null}
                marca={null}
                motor={null}
                transmision={null}
                precio={null}
                año={null}
            />
        </div>
    );
};

export default Body;
