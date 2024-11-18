import React from 'react';
import PropTypes from 'prop-types';

const SuccessAlert = ({ message, onClose }) => {
  return (
    <div style={styles.alertContainer}>
      <div style={styles.alertMessage}>
        <strong>¡Éxito!</strong> {message}
      </div>
      <button style={styles.closeButton} onClick={onClose}>
        X
      </button>
    </div>
  );
};

// Definimos los tipos de las propiedades (opcional)
SuccessAlert.propTypes = {
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

// Estilos inline
const styles = {
  alertContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#28a745',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '5px',
    marginBottom: '10px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  alertMessage: {
    fontSize: '16px',
  },
  closeButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '18px',
    cursor: 'pointer',
  },
};

export default SuccessAlert;
