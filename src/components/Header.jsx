import { useState, useEffect } from 'react'
import '../css/index.css'
import '../css/header.css'
import UPLogo from '../assets/header/UP Manila Logo.png'
import whiteDPSMLogo from '../assets/header/dpsm.jpg'
import orgLogo from '../assets/header/SOCOMSCI.png'

function Header({onOpenAbout}) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  // Dynamically adds/removes the .dark-mode class on the <body> tag
  useEffect(() => {
    if (isDarkMode){
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else{
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

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
        <img src={UPLogo} alt="UP Logo"/>

        {/* just remove this if unnessary */}
        <img className='whiteDPSM' src={whiteDPSMLogo} alt="UP Logo"/>
				<img src={orgLogo} alt="SoComSci Logo"/> 
        <h1 className='title'>SoComShop</h1>
      </div>

      <div className='header-items nav-links'>
        <p onClick={() => scrollToSection('home')}>&rsaquo; Home</p>
        <p onClick={() => scrollToSection('games')}>&rsaquo; Games</p>
        <p onClick={onOpenAbout}>&rsaquo; About</p>

        <button className='theme-toggle-btn' onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? '◐ Light Mode' : '◑ Dark Mode'}
        </button>
      </div>

    </header>
  );
}

export default Header;