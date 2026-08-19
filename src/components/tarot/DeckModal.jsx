import '../../css/index.css'
import '../../css/deckModal.css'
import { CARDS } from '../../data/cardData.js';
import { TIERS } from '../../data/tiers.js';
import { useState } from 'react';

function DeckModal({ isOpen, onClose }){
  const [selectedCard, setSelectedCard] = useState(null);

  if (!isOpen){
    return null;
  }

  const tierOrder = ['lucky', 'mythical', 'legendary', 'veryrare', 'rare', 'uncommon', 'common'];

  const handleClose = () => {
    if (selectedCard){
      setSelectdCard(null);
    } else{
      onClose();
    }
  }

  return(
    <div className='deck-overlay' onClick={onClose}>
      <div className='deck-modal-content' onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className='deck-modal-header'>
          <h2>FULL DECK - {CARDS.length} Cards by Rarity</h2>
          <button className='deck-close-btn' onClick={onClose}>&times; Close</button>
        </div>

        {/* BODY */}
        <div className='deck-modal-body'>
          {tierOrder.map((tierKey) => {
            const cardsInThisTier = CARDS.filter(card => card.tier === tierKey); // Find all cards that belong to a specific tier

            // If a tier has no cards, do not render it
            if (cardsInThisTier.length === 0){
              return null;
            }

            return(
              <div key={tierKey} className='deck-tier-section'>

                {/* TIER TITLES */}
                <h3 className={`deck-tier-title tier-text-${tierKey}`}>
                  <span className={`deck-tier-dot tier-bg-${tierKey}`}></span>
                  {TIERS[tierKey].label.toUpperCase()}
                  <span className='deck-tier-count'>({cardsInThisTier.length})</span>
                </h3>

                {/* CARD GRID */}
                <div className='deck-card-grid'>
                  {cardsInThisTier.map((card) => (
                    <div key={card.name} className={`deck-card-item tier-border-${tierKey}`} onClick={() => setSelectedCard(card)}>
                      {card.name}
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* CARD PREVIEW POP-UP OVERLAY */}
        {selectedCard && (
          <div className='card-preview-overlay' onClick={() => setSelectedCard(null)}>
            <div className='card-preview-content' onClick={(e) => e.stopPropagation()}>
              
              <img src={selectedCard.frontImg} alt={selectedCard.name} className='card-preview-img'/>
              
              <div className='card-preview-info'>
                <h2 className='card-preview-name'>{selectedCard.name}</h2>

                <p className={`card-preview-tier tier-text-${selectedCard.tier}`}>
                  {TIERS[selectedCard.tier].label.toUpperCase()}
                </p>
              </div>

              <button className='preview-close-btn' onClick={() => setSelectedCard(null)}>
                &times; Close
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  )
}

export default DeckModal;