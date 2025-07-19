import "./Footer.css";
import logo from "../../images/Logo.png"; 
import facebook from "../../icons/facebook.svg";
import twitter from "../../icons/twitter.svg";
import pinterest from "../../icons/pinterest.svg";
import Instagram from "../../icons/Instagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Imperial Grand Hotel" className="footer-logo" />
          <span className="footer-heading">
          </span>
          <p className="footer-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className="footer-links">
          <div className="footer-links-label">USEFUL LINKS</div>
          <ul className="footer-links-list">
            <li><a href="/">HOME</a></li>
            <li><a href="/404">404 Page Error</a></li>
          </ul>
        </div>
        <div className="footer-subscribe">
          <div className="footer-subscribe-label">SUBSCRIBE</div>
          <div className="footer-subscribe-desc">
            Don't miss to subscribe our news,<br />kindly fill the form below
          </div>
          <form className="footer-form" onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder="Your Email Here" className="footer-input" />
            <button className="footer-btn" aria-label="Subscribe">
              <span>&#8594;</span>
            </button>
          </form>
        </div>
      </div>

      <div className="footer-middle">
        <hr className="footer-divider" />
        <div className="footer-socials">
          <img src={facebook} alt="facebook" className="icon" />
          <img src={pinterest} alt="pinterest" className="icon" />
          <img src={Instagram} alt="Instagram" className="icon" />
          <img src={twitter} alt="twitter" className="icon" />
        </div>
        <hr className="footer-divider" />
      </div>

      <div className="footer-bottom">
        <span className="footer-copyright">
          © 2025 Imperial Grand Hotel. All Rights Reserved.
        </span>
        <span className="footer-policy">
          <a href="/404">Privacy Policy</a>
          <span> | </span>
          <a href="/404">Terms of Use</a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
