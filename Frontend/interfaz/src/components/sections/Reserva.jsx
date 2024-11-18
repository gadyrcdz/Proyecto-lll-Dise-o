import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'; // Importa SweetAlert2
import '../../assets/Reserva.css';

const Reserva = () => {
  const { state } = useLocation();
  const vehicle = state?.vehicle;
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [price] = useState(vehicle?.precio || 0);
  const [priceInUSD] = useState(price * 0.0020);

  const [errors, setErrors] = useState({
    location: '',
    date: '',
    time: '',
    paymentMethod: '',
  });

  const handleReserve = (e) => {
    e.preventDefault(); // Prevenir la acción por defecto del formulario

    // Validación de los campos
    let formIsValid = true;
    let newErrors = { location: '', date: '', time: '', paymentMethod: '' };

    if (!location) {
      newErrors.location = 'Seleccione una ubicación.';
      formIsValid = false;
    }
    if (!date) {
      newErrors.date = 'Seleccione una fecha.';
      formIsValid = false;
    }
    if (!time) {
      newErrors.time = 'Seleccione una hora.';
      formIsValid = false;
    }
    if (!paymentMethod) {
      newErrors.paymentMethod = 'Seleccione un método de pago.';
      formIsValid = false;
    }

    setErrors(newErrors);

    if (formIsValid) {
      // Si todos los campos son válidos, mostrar la alerta de éxito
      Swal.fire({
        title: '¡Reserva realizada con éxito!',
        text: `Has reservado el vehículo ${vehicle?.marca} ${vehicle?.modelo} con éxito.`,
        icon: 'success',
        confirmButtonText: 'Aceptar',
      }).then(() => {
        // Redirigir al inicio después de que el usuario cierre la alerta
        navigate('/');
      });
    }
  };

  return (
    <div className="reserva-container">
      <h1>Reserva de Vehículo</h1>
      <p><strong>Vehículo:</strong> {vehicle?.marca} {vehicle?.modelo}</p>
      <p><strong>Precio:</strong> {price} ₡ (Equivalente a {priceInUSD.toFixed(2)} USD)</p>

      <form onSubmit={handleReserve}>
        <div>
          <label htmlFor="location">Seleccione la ubicación:</label>
          <select
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          >
            <option value="">Seleccione</option>
            <option value="Cartago">Cartago</option>
            <option value="San José">San José</option>
            <option value="Heredia">Heredia</option>
            <option value="Alajuela">Alajuela</option>
          </select>
          {errors.location && <span className="error-message">{errors.location}</span>}
        </div>

        <div>
          <label htmlFor="date">Seleccione la fecha:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          {errors.date && <span className="error-message">{errors.date}</span>}
        </div>

        <div>
          <label htmlFor="time">Seleccione la hora:</label>
          <input
            type="time"
            id="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
          {errors.time && <span className="error-message">{errors.time}</span>}
        </div>

        <div>
          <label htmlFor="payment">Método de pago:</label>
          <select
            id="payment"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Seleccione</option>
            <option value="sinpe">SINPE Móvil</option>
            <option value="paypal">PayPal</option>
            <option value="creditCard">Tarjeta de Crédito</option>
          </select>
          {errors.paymentMethod && <span className="error-message">{errors.paymentMethod}</span>}
        </div>

        <button type="submit">Confirmar Reserva</button>
      </form>
    </div>
  );
};

export default Reserva;
