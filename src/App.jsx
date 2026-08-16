import './css/index.css'
import './css/app.css'
import { useState } from 'react';
import Header from './components/Header';
import AboutModal from './components/AboutModal';
import Body from './components/Body';
import Games from './components/Games';
import Footer from './components/Footer';

function App() {
  // isAboutOpen has a truthy value of false
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div>
      <Header onOpenAbout={() => setIsAboutOpen(true)}/>

      {/* Main Page Sections */}
      <section id="home">
        <Body/>
      </section>

      <section id="games">
        <Games/>
      </section>

      <Footer/>

      {/* About Modal Popup */}
      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />
    </div>
  );
}

export default App;