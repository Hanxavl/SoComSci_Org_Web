import { useState, useRef } from 'react'
import '../css/index.css'
import '../css/tarot.css'
import Footer from './Footer'
import TarotCard from './tarot/TarotCard.jsx'
import DeckModal from './tarot/DeckModal.jsx'
import { CARDS } from '../data/cardData.js'
import { drawWeightedCards } from '../utils/weightedDraw.js'

function Tarot({ onBack }){
  // REACT HOOKS FOR DECK MODAL
  const [isDeckModal, setIsDeckModal] = useState(false);


  // GAME STATE FOR CARDS
  const [hasPlayed, setHasPlayed] = useState(false)   // game state toggles between cards stacked (false) and fanned (true)
  const [drawnCards, setDrawnCards] = useState([])    // this stores 5 active cards
  const shuffleTimerRef = useRef(null)                // create a reference to hold our timer

  const handlePlay = () => {

    // if a shuffle timer is currently ticking down, stop it
    if (shuffleTimerRef.current){
      clearTimeout(shuffleTimerRef.current);
    }
    
    const topFive = drawWeightedCards(CARDS, 5);

    // store them in setDrawnCards and trigger the fan animation
    setDrawnCards(topFive);
    setHasPlayed(true);
  }

  const handleShuffle = () => {
    setHasPlayed(false); // go back to stack card animation
    
    // // Delay clearing the cards until the 600ms stacking animation completes
    shuffleTimerRef.current =  setTimeout(() => {
      setDrawnCards([]);
    }, 600)
  }

  // helper function to calculate inline style for the stack or fan
  const getCardStyle = (index) => {
    if (!hasPlayed){
      // STACKED CARDS: all share same the same center rotated slightly
      const pileRotation = (index - 2) * 3; // -6, -3, 0, 3, 6 degrees
      return{
        transform: `translate(-50%, -50%) rotate(${pileRotation}deg)`,
      };
    } else {
      // FANNED CARDS: spread out horizontally with a curved lift
      // note to hans: [20, 5, -5, 5, 20][index] array indexing gets the element in liftcurve base on current index
      const spread = 160;                          // the horizontal px distance between the centers of each card
      const offsets = [-2, -1, 0, 1, 2];           // position relative to center
      const off = offsets[index];
      const liftCurve = [20, 5, -5, 5, 20][index]; // outer cards sits lower
      const rot = off * 9;                         // degrees - outer cards titl more

      return{
        transform: `translate(calc(-50% + ${off * spread}px), calc(-50% + ${liftCurve}px)) rotate(${rot}deg)`,
      };
    }
  }

  return(
    <div className='tarot-main-container'>
      {/* HEADER */}
      <div className='tarot-header'>
        <div className='tarot-header-items left'>
          <button className='tarot-back-btn' onClick={onBack}>
          ‹ Back to Games
          </button>

          <h2 className='tarot-game-title'>Charot Cards Telling</h2>
        </div>

        <div className='tarot-header-items right'>
          {/* BUTTONS */}
          <button className='view-deck-btn' onClick={() => setIsDeckModal(true)}>🂠 View Full Deck</button>
          {!hasPlayed ? (
            <button className='shuffle-btn' onClick={handlePlay}>
              ▶ Play
            </button>
          ) : (
            <button className='shuffle-btn' onClick={handleShuffle}>
              ↺ Shuffle
            </button>
          )}
        </div>
      </div>

      {/* GAME */}
      <div className='tarot-table'>
        <div className='card-anchor'>
          {/* rendering 5 cards */}
          {[0, 1, 2, 3, 4].map((index) => (
            <TarotCard key={index} cardData={drawnCards[index]} style={getCardStyle(index)} isFanned={hasPlayed}/>
          ))}
        </div>

        <p className="tarot-instruction">
            {hasPlayed ? 'tap a card to reveal it' : 'click play to shuffle the deck'}
        </p>
      </div>

      <Footer/>

      {/* Deck Modal Popup */}
      <DeckModal
        isOpen={isDeckModal}
        onClose={() => setIsDeckModal(false)}
      />
    </div>
  )
}

export default Tarot;