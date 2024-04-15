import React, { useState } from 'react';
import axios from 'axios';
import './inputData.css'; // Import CSS file for styling

const PetForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    breed: '',
    color: '',
    description: '',
    imageLabel: '',
    category: '',
    image: null,
    additionalImages: [],
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [additionalImagePreviews, setAdditionalImagePreviews] = useState([]);

  const handleChange = (e) => {
    if (e.target.name === 'image' || e.target.name === 'additionalImages') {
      const files = Array.from(e.target.files);
      const selectedFiles = files.slice(0, 5); // Take at most 5 files

      if (e.target.name === 'image') {
        const reader = new FileReader();
        reader.onload = () => {
          setImagePreview(reader.result);
        };
        reader.onerror = () => {
          console.error('Error reading main image.');
        };
        reader.readAsDataURL(selectedFiles[0]);
      } else {
        const previews = [];
        selectedFiles.forEach((file) => {
          const reader = new FileReader();
          reader.onload = () => {
            previews.push(reader.result);
            if (previews.length === selectedFiles.length) {
              setAdditionalImagePreviews(previews);
            }
          };
          reader.onerror = () => {
            console.error('Error reading additional image.');
          };
          reader.readAsDataURL(file);
        });
      }

      setFormData({ ...formData, [e.target.name]: selectedFiles });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (key === 'image' || key === 'additionalImages') {
          value.forEach((file) => {
            formDataToSend.append(key, file);
          });
        } else {
          formDataToSend.append(key, value);
        }
      });

      await axios.post('http://localhost:4001/api/pets/create', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setFormData({
        name: '',
        age: '',
        breed: '',
        color: '',
        description: '',
        imageLabel: '',
        category: '',
        image: null,
        additionalImages: [],
      });
      setImagePreview(null);
      setAdditionalImagePreviews([]);

      console.log('Successfully submitted!');

    } catch (error) {
      console.error('Error uploading:', error);
    }
  };

  return (
    <div className="form-container">
      <form className="pet-form" onSubmit={handleSubmit}>
        <h2>Add a Pet</h2>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" required />
        <input type="text" name="breed" value={formData.breed} onChange={handleChange} placeholder="Breed" required />
        <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="Color" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
        <input type="text" name="imageLabel" value={formData.imageLabel} onChange={handleChange} placeholder="Image Label" required />
        
        <select name="category" value={formData.category} onChange={handleChange} required>
          <option value="">Select Category</option>
          <option value="661d0a62791f88fb6daa92a9">Cats</option>
          <option value="661d0a66791f88fb6daa92ab">Fish</option>
          <option value="661d0a5b791f88fb6daa92a7">Dogs</option>
          <option value="661d0a30791f88fb6daa92a5">Birds</option>
        </select>

        {imagePreview && <img className="preview" src={imagePreview} alt="Main Preview" />}

        <label htmlFor="image">Main Image:</label>
        <input type="file" name="image" id="image" onChange={handleChange} required />
        
        {additionalImagePreviews.map((preview, index) => (
          <img key={index} className="preview" src={preview} alt={`Additional Preview ${index}`} />
        ))}
        
        <label htmlFor="additionalImages">Additional Images (Max 5):</label>
        <input type="file" name="additionalImages" id="additionalImages" multiple onChange={handleChange} accept="image/*" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PetForm;
