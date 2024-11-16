import React, { useState, useRef } from "react";

const PhotoUpload = ({ onFormChange }) => {
  const internalPhotoInputRef = useRef(null);
  const externalPhotoInputRef = useRef(null);
  const [internalPhotos, setInternalPhotos] = useState([]);
  const [externalPhotos, setExternalPhotos] = useState([]);

  const handlePhotoChange = (event, type) => {
    const files = Array.from(event.target.files);
    if (type === "internal") {
      if (files.length <= 4) {
        setInternalPhotos(files);
        onFormChange("internalPhotos", files);
        event.target.setCustomValidity(""); // Limpiar el mensaje de error
      } else {
        event.target.setCustomValidity("Solo puedes subir un máximo de 4 fotos internas.");
      }
    } else {
      if (files.length <= 4) {
        setExternalPhotos(files);
        onFormChange("externalPhotos", files);
        event.target.setCustomValidity(""); // Limpiar el mensaje de error
      } else {
        event.target.setCustomValidity("Solo puedes subir un máximo de 4 fotos externas.");
      }
    }
  };

  return (
    <div className="photo-upload-section">
      <h2>Fotografías</h2>

      <div className="form-group">
        <label>Subir fotos internas (Mínimo 1, máximo 4):</label>
        <input
          type="file"
          multiple
          accept="image/*"
          ref={internalPhotoInputRef}
          required
          onInvalid={() => internalPhotoInputRef.current.setCustomValidity("Por favor, selecciona entre 1 y 4 fotos internas.")}
          onChange={(e) => handlePhotoChange(e, "internal")}
        />
        <div className="photo-preview">
          {internalPhotos.length > 0 &&
            internalPhotos.map((photo, index) => (
              <img
                key={index}
                src={URL.createObjectURL(photo)}
                alt={`internal-${index}`}
                className="preview-photo"
              />
            ))}
        </div>
      </div>

      <div className="form-group">
        <label>Subir fotos externas (Mínimo 1, máximo 4):</label>
        <input
          type="file"
          multiple
          accept="image/*"
          ref={externalPhotoInputRef}
          required
          onInvalid={() => externalPhotoInputRef.current.setCustomValidity("Por favor, selecciona entre 1 y 4 fotos externas.")}
          onChange={(e) => handlePhotoChange(e, "external")}
        />
        <div className="photo-preview">
          {externalPhotos.length > 0 &&
            externalPhotos.map((photo, index) => (
              <img
                key={index}
                src={URL.createObjectURL(photo)}
                alt={`external-${index}`}
                className="preview-photo"
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoUpload;
