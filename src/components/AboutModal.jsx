import '../css/index.css';
import '../css/aboutModal.css';
import instaQR from '../assets/header/insta.jpg';
import fbQR from '../assets/header/fb.jpg'
import tiktokQR from '../assets/header/tiktok.jpg'

function AboutModal({ isOpen, onClose }) {
  if (!isOpen){
		return null;
	}

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* close button */}
        <button className="modal-close-btn" onClick={onClose}> &times; </button>

        <h2>About SoComShop</h2>
        <p className="modal-description">
          Welcome to the official event site! Scan the QR codes below to connect 
          with our community and follow our official social channels.
        </p>

        {/* Side-by-Side QR Container */}
        <div className="qr-container">
          <div className="qr-card">
            <img src={fbQR} alt="SoComSci Instagram QR" className="qr-image" />
            <span>Facebook</span>
          </div>

          <div className="qr-card">
            <img src={instaQR} alt="SoComSci Facebook QR" className="qr-image" />
            <span>Instagram</span>
          </div>

          <div className="qr-card">
            <img src={tiktokQR} alt="SoComSci Facebook QR" className="qr-image" />
            <span>TikTok</span>
          </div>
        </div>

        <div className="social-links">
          <h3>Follow Us</h3>
          <div className="links-row">
            <a href="https://www.facebook.com/share/1HqzGHBhPC/" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://www.instagram.com/upsocomsci?igsh=c25vbDdsNzc1bWw0" target="_blank" rel="noreferrer">
              Instagram
            </a>

            <a href="https://www.tiktok.com/@upsocomsci?_r=1" target="_blank" rel="noreferrer">
              TikTok
            </a>

						<a href="https://www.linkedin.com/company/upsocomsci/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutModal;