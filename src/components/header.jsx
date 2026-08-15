import '../css/index.css'
import '../css/header.css'
import UPLogo from '../assets/header/UP Manila Logo.png'
import orgLogo from '../assets/header/SOCOMSCI.png'

function Header({onOpenAbout}) {
  // Smoothly scrolls to the top of the page ('home') or to a target section by element ID
  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className='main-header-container'>
      <div className='header-items'>
        <img src={UPLogo} alt="UP Logo" />
				<img src={orgLogo} alt="SoComSci Logo"/> 
        <h1 className='title'>SoComShop</h1>
      </div>

      <div className='header-items nav-links'>
        <p onClick={() => scrollToSection('home')}>&gt; Home</p>
        <p onClick={() => scrollToSection('games')}>&gt; Games</p>
        <p onClick={onOpenAbout}>&gt; About</p>
        <button>Light Mode</button>
      </div>

    </header>
  );
}

export default Header;