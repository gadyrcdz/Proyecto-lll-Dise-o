import React, { useState, useRef } from "react";

// Modifica tu componente para manejar fotos internas y externas
const Cloudinary = ({ onFormChange }) => {
  const internalPhotoInputRef = useRef(null);
  const externalPhotoInputRef = useRef(null);
  const [internalPhotos, setInternalPhotos] = useState([]); // Para las fotos internas
  const [externalPhotos, setExternalPhotos] = useState([]); // Para las fotos externas
  const [loading, setLoading] = useState(false); // Para controlar el estado de carga

  const preset_name = "upload_preset"; // Tu preset de Cloudinary
  const cloud_name = "druqzfivv"; // Tu cloud_name

  // Función que se encarga de subir la imagen a Cloudinary
  const uploadImage = async (file) => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', preset_name);

    setLoading(true); // Empieza la carga

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: 'POST',
        body: data
      });

      const fileData = await response.json();
      setLoading(false); // Termina la carga
      return fileData.secure_url; // Retorna la URL segura de la imagen subida
    } catch (error) {
      setLoading(false);
      console.error('Error uploading image:', error);
    }
  };

  // Maneja el cambio de fotos (internas o externas)
  const handlePhotoChange = async (e, type) => {
    const files = Array.from(e.target.files); // Convierte los archivos seleccionados en un array
    let updatedFiles = [];

    if (type === "internal") {
      if (files.length <= 4) {
        // Subir fotos internas a Cloudinary
        for (let file of files) {
          const url = await uploadImage(file);
          updatedFiles.push(url);
        }
        setInternalPhotos(updatedFiles);
        onFormChange("internalPhotos", updatedFiles); // Envía las URLs al componente padre
        e.target.setCustomValidity(""); // Limpia cualquier mensaje de error
      } else {
        e.target.setCustomValidity("Solo puedes subir un máximo de 4 fotos internas.");
      }
    } else {
      if (files.length <= 4) {
        // Subir fotos externas a Cloudinary
        for (let file of files) {
          const url = await uploadImage(file);
          updatedFiles.push(url);
        }
        setExternalPhotos(updatedFiles);
        onFormChange("externalPhotos", updatedFiles); // Envía las URLs al componente padre
        e.target.setCustomValidity(""); // Limpia cualquier mensaje de error
      } else {
        e.target.setCustomValidity("Solo puedes subir un máximo de 4 fotos externas.");
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
          onInvalid={() =>
            internalPhotoInputRef.current.setCustomValidity(
              "Por favor, selecciona entre 1 y 4 fotos internas."
            )
          }
          onChange={(e) => handlePhotoChange(e, "internal")}
        />
        <div className="photo-preview">
          {internalPhotos.length > 0 &&
            internalPhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
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
          onInvalid={() =>
            externalPhotoInputRef.current.setCustomValidity(
              "Por favor, selecciona entre 1 y 4 fotos externas."
            )
          }
          onChange={(e) => handlePhotoChange(e, "external")}
        />
        <div className="photo-preview">
          {externalPhotos.length > 0 &&
            externalPhotos.map((photo, index) => (
              <img
                key={index}
                src={photo}
                alt={`external-${index}`}
                className="preview-photo"
              />
            ))}
        </div>
      </div>

      {/* Mostrar el estado de carga mientras las imágenes se suben */}
      {loading && <h3>Cargando...</h3>}
    </div>
  );
};

export default Cloudinary;
