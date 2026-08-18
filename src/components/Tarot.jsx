import { useState } from 'react'
import '../css/index.css'
import '../css/tarot.css'
import Footer from './Footer'
import tarotBackCard from '../assets/charotCards/back/tarot_card_back_single.png'

function Tarot({ onBack }){
  // game state toggles between cards stacked (false) and fanned (true)
  const [hasPlayed, setHasPlayed] = useState(false)

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
          <button className='view-deck-btn'>🂠 View Full Deck</button>
          {!hasPlayed ? (
            <button className='shuffle-btn' onClick={() => setHasPlayed(true)}>
              ▶ Play
            </button>
          ) : (
            <button className='shuffle-btn' onClick={() => setHasPlayed(false)}>
              ↺ Shuffle
            </button>
          )}
        </div>
      </div>

      {/* GAME */}
      <div className='tarot-table'>
        <div className='card-anchor'>
          {/* rendering 5 dummy cards */}
          {[0, 1, 2, 3, 4].map((index) => (
            <div key={index} className='tarot-card-placeholder' style={getCardStyle(index)}>
              <img src={tarotBackCard} alt="Back of Tarot Card" className='placeholder-back-img'/>
            </div>
          ))}
        </div>

        <p className="tarot-instruction">
            {hasPlayed ? 'tap a card to reveal it' : 'click play to shuffle the deck'}
        </p>
      </div>

      <Footer/>
    </div>
  )
}

export default Tarot;