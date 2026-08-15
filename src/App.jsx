import './css/index.css'
import './css/app.css'
import { useState } from 'react';
import Header from './components/HeaderTemp';
import AboutModal from './components/AboutModal';
import Body from './components/BodyTemp'

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
        {/* Connect 4 and Tarot Card components will sit here */}
      </section>

      {/* About Modal Popup */}
      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />
    </div>
  );
}

export default App;