import "./adoptionHome.css"
import adoptionBanner from "../assets/adoptionBanner.svg"

function AdoptionHome (){
    return(
        <>
        <div className="adoptionHomeMain">
            <div className="adoptionBannerContainer"></div>

            <div className="adoptionHomeOptions">
                <h1>Meet Our Pets</h1>
                <p>Check out nearby pets looking for forever homes.</p>
                <div className="petOptionsContainer">
                <div className="adoptionPetOption">
                        <div className="adoptionPetImg"></div>
                        <div className="adoptionPetName"></div>
                        <div className="adoptionPetBreed"></div>
                        <div className="adoptionPetLocation"></div>
                    </div>
                    <div className="adoptionPetOption">
                        <div className="adoptionPetImg"></div>
                        <div className="adoptionPetName"></div>
                        <div className="adoptionPetBreed"></div>
                        <div className="adoptionPetLocation"></div>
                    </div>
                    <div className="adoptionPetOption">
                        <div className="adoptionPetImg"></div>
                        <div className="adoptionPetName"></div>
                        <div className="adoptionPetBreed"></div>
                        <div className="adoptionPetLocation"></div>
                    </div>
                </div>
                
            </div>
        </div>
        </>
    )
}


export default AdoptionHome