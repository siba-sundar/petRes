import React from 'react'
import "./aboutUs.css"
import aboutBanner from"../assets/human cat.jpg"
import khushi from "../assets/mee .jpeg"
import vishakha from "../assets/vishakha.jpg"
import shrey from "../assets/shrey1.jpg"
import siba from "../assets/siba.jpg"
const Start = () => {
  return (
    <>
    <div class="container1">
        <div class="wedo">
            <h4>WHO ARE WE</h4>
            <h6>Welcome to our pet adoption and rehome platform!<br/> We're passionate about connecting pets in need with loving homes.<br/>By choosing adoption, you're not just gaining a new family<br/> member—you're providing a second chance to a deserving pet.<br/> Our platform makes the process easy, with detailed profiles and resources<br/> to guide you every step of the way.</h6>
            <h6>Browse through our profiles to find your perfect match and make a difference in a pet's life.<br/> Together, we can create countless happy endings and forever homes filled with love and joy.<br/> Join us in making a difference—one adoption at a time.</h6>
        </div>
        <div class="image">
            <img src={aboutBanner} class="img-fluid" alt=""/>
        </div>    
    </div>  

    <br/><br/><br/><br/>
    <div class="container2">
        <div class="thought">
            <h1>Our vision: Every pet, cherished. Every home, fulfilled.</h1>
            <br/><br/>
            <h5>"Embrace the joy of adoption, where love knows no bounds. Together, let's make tails wag and hearts sing."</h5>
            <h5>Find your furry soulmate, and let the adventure begin!</h5>
        </div>
    </div>      

    <br/><br/><br/><br/>
    <div class="final_thought">
        <h3>"Unlock the door to unconditional love. Adopt a pet and let their loyalty paint your world with endless hues of joy."</h3>
    </div> 
</>
  )
}

export default Start