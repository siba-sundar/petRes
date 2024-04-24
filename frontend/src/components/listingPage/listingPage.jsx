import "./listingPage.css";
import ProfileCard from "./listingCard.jsx"
import Recom from "./recommendation.jsx"
import axios from "axios";
import { useState, useEffect } from "react";

const ListingPage = () => {

    const [categories, setCategories] = useState([
        { _id: "661d0a62791f88fb6daa92a9", name: "cats" },
        { _id: "661d0a66791f88fb6daa92ab", name: "fish" },
        { _id: "661d0a5b791f88fb6daa92a7", name: "dogs" },
        { _id: "661d0a30791f88fb6daa92a5", name: "birds" }
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
        <div className="listingMainContainer">
            <div className="listingRecommendations">
                <Recom/>
            </div>

            <div className="listingMenu">
                {categories.map(category => (
                    <button key={category._id} onClick={() => handleClick(category._id)} className="categoryButtons">{category.name}</button>
                ))}
                 <button onClick={handleGetAll} className="categoryButtons">Get All</button>
            </div>

            <div className="listingPets">
                <ProfileCard details={pets} />
            </div>
         </div>
    );
};

export default ListingPage;
