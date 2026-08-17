import './css/index.css'
import './css/app.css'
import { useState } from 'react';
import Header from './components/Header';
import AboutModal from './components/AboutModal';
import Body from './components/Body';
import Games from './components/Games';
import Footer from './components/Footer';
import Connect from './components/Connect';
import Tarot from './components/Tarot';

function App() {
  // isAboutOpen has a truthy value of false
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // for games it can change to 3 mode ( main | connect | tarot )
  const [activeView, setActiveView] = useState('main');

  return (
    <div>
      {activeView === 'main' && (
        <>
          <Header onOpenAbout={() => setIsAboutOpen(true)}/>

          {/* Main Page Sections */}
          <section id="home">
            <Body/>
          </section>

          <section id="games">
            <Games 
              onPlayConnect={() => setActiveView('connect')}
              onPlayTarot={() => setActiveView('tarot')}
            />
          </section>

          <Footer/>
        </>
      )}

      {/* Connect 4 view => renders connect 4 */}
      {activeView === 'connect' && (
        <Connect onBack={() => setActiveView('main')}/>
      )}

      {/* Tarot view => renderes charot cards telling */}
      {activeView === 'tarot' && (
        <Tarot onBack={() => setActiveView('main')}/>
      )}

      {/* About Modal Popup */}
      <AboutModal 
        isOpen={isAboutOpen} 
        onClose={() => setIsAboutOpen(false)} 
      />
    </div>
  );
}

export default App;