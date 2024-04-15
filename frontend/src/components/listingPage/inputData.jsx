import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PetForm = () => {
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

  // Function to get three random pets from the array
  const getRandomPets = () => {
    const shuffledPets = pets.sort(() => 0.5 - Math.random());
    return shuffledPets.slice(0, 3);
  };

  // Randomly select three pets from the fetched data
  const randomPets = getRandomPets();

  return (
    <div>
      {randomPets.map(pet => (
        <div key={pet._id}>
          <h2>{pet.name}</h2>
          <p>Age: {pet.age}</p>
          <p>Breed: {pet.breed}</p>
          <p>Color: {pet.color}</p>
          <p>Description: {pet.description}</p>
          {/* Add more details as needed */}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default PetForm;
