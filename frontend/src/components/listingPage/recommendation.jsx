import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./recommendation.css"
import placeholderImage from '../assets/placeholder.svg'; // Import placeholder image

const RandomPets = () => {
  const [randomPets, setRandomPets] = useState([]);

  useEffect(() => {
    async function fetchRandomPets() {
      try {
        const response = await axios.get('http://localhost:4001/api/pets/all');
        // Shuffle the array to get random pets
        const shuffledPets = response.data.sort(() => 0.5 - Math.random());
        // Get the first 3 elements (random)
        const randomThreePets = shuffledPets.slice(0, 3);
        setRandomPets(randomThreePets);
      } catch (error) {
        console.error('Error fetching random pets:', error);
      }
    }
    fetchRandomPets();
  }, []);

  return (
    <div>
        <div className="recoMainContainer">
        {randomPets.map((value, index) => (
            <div className="petCard" key={index}>
                <div className="recomImg">
                    {/* Use placeholder image if image URL is not available */}
                    <img src={"http://localhost:4001/" + value.image || placeholderImage} alt="Pet" />
                </div>
                <div className="petDetails">
                    <p>Name: {value.name}</p>
                    <p>Breed: {value.breed}</p>
                    <p>{value.description}</p>
                </div>
            </div>
            ))}
        </div>
    </div>
  );
};

export default RandomPets;
