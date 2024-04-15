import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from "../components/listingCard.jsx";

const PetButtons = () => {
  const [categories, setCategories] = useState([
    { _id: "6619a3a648c3cd1a53034978", name: "cats" },
    { _id: "6619a3ad48c3cd1a5303497a", name: "fish" },
    { _id: "661c1a6e30a3aeeda3a42ce4", name: "dogs" },
    { _id: "661c1a7730a3aeeda3a42ce6", name: "birds" }
  ]);
  const [pets, setPets] = useState([]);

  useEffect(() => {
    async function fetchPets() {
      try {
        const response = await axios.get('http://localhost:4001/api/pets/all');
        setPets(response.data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    }
    fetchPets();
  }, []);

  const handleClick = async (categoryId) => {
    try {
      const response = await axios.get(`http://localhost:4001/api/pets/category/${categoryId}`);
      console.log('Received pets for category:', response.data);
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  const handleGetAll = async () => {
    try {
      const response = await axios.get('http://localhost:4001/api/pets/all');
      console.log('Received all pets:', response.data);
      setPets(response.data);
    } catch (error) {
      console.error('Error fetching pets:', error);
    }
  };

  return (
    <div>
      {/* Render buttons for each category */}
      {categories.map(category => (
        <button key={category._id} onClick={() => handleClick(category._id)}>{category.name}</button>
      ))}
      {/* Render "Get All" button */}
      <button onClick={handleGetAll}>Get All</button>

      {/* Render pets */}
      <div>
        <h2>Pets:</h2>

         <ProfileCard details={pets} />
      </div>
    </div>
  );
};

export default PetButtons;
