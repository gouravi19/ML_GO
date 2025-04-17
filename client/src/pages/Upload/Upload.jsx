import React, { useState } from 'react';
import './upload.css';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

export default function Upload() {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Handle image change (file selection)
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file)); // Create preview URL
    } else {
      alert('Please upload a valid image file.');
    }
  };

  // Handle the image upload
  const handleUpload = async () => {
    if (!image) {
      alert('No image selected!');
      return;
    }

    setLoading(true); // Show loading message

    const formData = new FormData();
    formData.append('image', image);

    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.error) {
        alert(`Error from server: ${data.error}`);
      } else {
        console.log("📍 Navigating to /result with data:", data);
        navigate('/result', { state: { result: data } });
      }
    } catch (err) {
      console.error('Upload error:', err);
      alert('Something went wrong while uploading.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
      <Navbar />
      <div className="upload-container">
        <h2>Upload an Image for Analysis</h2>

        {/* Image file input */}
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {/* Image preview */}
        {previewUrl && (
          <div className="preview">
            <img src={previewUrl} alt="Preview" />
          </div>
        )}

        {/* Loading indicator */}
        {loading && <p className="loading-text">Analyzing image, please wait...</p>}

        {/* Analyze button */}
        <button onClick={handleUpload} disabled={loading}>
          {loading ? 'Analyzing...' : 'Analyze'}
        </button>
      </div>
    </>
  );
}
