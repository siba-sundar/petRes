import './footer.css'; 

function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter">
        <h2>Subscribe to our Newsletter</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Email" className="newsletter-input" />
          <input type="text" placeholder="Company" className="newsletter-input" />
          <button type="submit" className="newsletter-submit">Subscribe</button>
        </form>
      </div>
      <div className="footer-links">
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Company History</a></li>
          <li><a href="#">Our Team</a></li>
          <li><a href="#">Our Vision</a></li>
          <li><a href="#">Press Release</a></li>
        </ul>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Affiliate Program</a></li>
          <li><a href="#">Press Kit</a></li>
        </ul>
        <ul>
            <h3></h3>
          <li><a href="#"> Terms & Conditions</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Licensing</a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>rojPagar</p>
        <p>© 2024 rojPagar. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Newsletter;
