import "./listingCard.css";
//import petImg from "./assets/Rectangle 43.svg";

const ListingCard = ({ details }) => {
  return (
    <>
      {details.map((value, index) => (
        <div className="cardMainContainer" key={index}>
          <div className="cardImgContainer">
            {/* Fix the image path */}
            <img src={"http://localhost:4001/" + value.image || petImg} alt="pet img" />
          </div>

          <div className="cardDeatilsContainer">
            <h3>{value.name}</h3>
            <div className="locAndBreed">
              <p>Breed: {value.breed}</p>
              <p>Colour : {value.color}</p>
              <p>Age: {value.age}</p>
            </div>
          </div>

          <hr />
          <div className="petDescription">
            <p>{value.description}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListingCard;
