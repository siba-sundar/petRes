import "./home.css"
import homeBanner from "../assets/homeBanner.svg"
import homeDesgin from  "../assets/homeDesign.svg"
import dog from "../assets/animal 4.svg"
import cat from "../assets/animal 3.svg"
import fish from "../assets/animal 2.svg"
import bird from "../assets/animal 1.svg"
import visit1 from "../assets/visitStore1.svg"
import visit2 from "../assets/visitStore2.svg"
import visit3 from "../assets/visitStore3.svg"
import services from "../assets/servicesBanner.svg"
import saleBanner  from "../assets/homeSaleBanner.svg"



function Home (){
    return(
        <>
        <div className="homeMainContainer">
            <div className="homeIntroMain">
                <div className="homeIntro">
                    <div className="homeIntroContent">
                        <h1>Furever Friends</h1>
                        <p>"Connecting Hearts, Creating Homes: Your Destination for Pet Adoption and Service Excellence!"</p>

                        <button className="homeAdoptNow">Adopt Now</button>
                    </div>
                    <div className="homeIntroBanner">
                        <img src={homeBanner} alt="" />
                    </div>
                </div>
            </div>

            <div className="homeAbout">
                <div className="homeAboutContainer">
                    <div className="homeAboutContent">
                        <h1>About us</h1>
                        <p>Welcome to ResQpetz, where we nurture the bond between pets and their owners with love and care. Our platform is a haven for pet lovers seeking to provide their furry companions with the utmost affection and attention. Whether you're embarking on the heartwarming journey of adoption, pampering your pets with the finest supplies, or accessing essential services to keep them healthy and happy, we're here to support you every step of the way. Join our compassionate community today and let's create a world where every pet is cherished and nurtured with boundless love.</p>


                        <button className="homeAboutUs">
                            More About Us
                        </button>
                    </div>
                </div>

                <div className="homeAboutCategory">
                    <div className="aboutCategoryContainer">
                        <div className="aboutElements">
                            <img src={dog} alt="" className="animalCategory" />
                            <p>Dog</p>
                        </div>

                        <div className="aboutElements">
                            <img src={cat} alt="" className="animalCategory" />
                            <p>Cat</p>
                        </div>

                        <div className="aboutElements">
                            <img src={fish} alt="" className="animalCategory" />
                            <p>Fish</p>
                        </div>

                        <div className="aboutElements">
                            <img src={bird} alt="" className="animalCategory" />
                            <p>Bird</p>
                        </div>
                    </div>  
                </div>
            </div>


            {/*Service section*/}
            <div className="homeServicesContainer">
                <img src={services} alt="" />
            </div>


            {/*Store section*/}
            <div className="homeStoreContainer">
                <h2>Visit Our Store</h2>
                <div className="storeContentContainer">
                    <div className="productBannerContainer">
                        <img src={visit1} alt="" className="storeProductsBanner" />
                    </div>

                    <div className="productBannerContainer">
                        <img src={visit2} alt="" className="storeProductsBanner" />
                    </div>
                    <div className="productBannerContainer">
                        <img src={visit3} alt="" className="storeProductsBanner" />
                    </div>
                    
                </div>
                <button className="homeShopNow">Shop Now</button>
            </div>

            <img src={saleBanner} alt="" className="homeSaleBanner" />
        </div>
        </>
    )
}

export default Home