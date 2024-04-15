import React, { useState } from 'react';
import axios from 'axios';

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

  const handleChange = (e) => {
    if (e.target.name === 'image' || e.target.name === 'additionalImages') {
      const files = Array.from(e.target.files);
      const selectedFiles = files.slice(0, 5); // Take at most 5 files
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

      // Reset form after successful submission
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

      console.log('Successfully submitted!');

      // Handle success, maybe redirect or show a success message
    } catch (error) {
      console.error('Error uploading:', error);
      // Handle error, maybe show an error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="age" value={formData.age} onChange={handleChange} placeholder="Age" />
      <input type="text" name="breed" value={formData.breed} onChange={handleChange} placeholder="Breed" />
      <input type="text" name="color" value={formData.color} onChange={handleChange} placeholder="Color" />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description"></textarea>
      <input type="text" name="imageLabel" value={formData.imageLabel} onChange={handleChange} placeholder="Image Label" />
      <input type="text" name="category" value={formData.category} onChange={handleChange} placeholder="Category" />
      <label htmlFor="image">Main Image:</label>
      <input type="file" name="image" id="image" onChange={handleChange} />
      <label htmlFor="additionalImages">Additional Images (Max 5):</label>
      <input type="file" name="additionalImages" id="additionalImages" multiple onChange={handleChange} accept="image/*" />
      <button type="submit">Submit</button>
    </form>
  );
};

export default PetForm;
