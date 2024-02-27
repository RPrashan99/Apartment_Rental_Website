import React, { useState } from 'react';
import Input from '../Input/Input';

const ImageUpload = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      onImageSelect(reader.result, file);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
            type="file"
            label="Image"
            onChange={handleImageChange}
        />
      {selectedImage && (
        <div>
          <img
            src={URL.createObjectURL(selectedImage)}
            alt="Preview"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
