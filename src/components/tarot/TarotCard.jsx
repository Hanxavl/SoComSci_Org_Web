import { useState, useEffect } from 'react'
import '../../css/index.css';
import '../../css/tarotCard.css'
import tarotBackCard from '../../assets/charotCards/back/tarot_card_back_single.png'

function TarotCard({ cardData, style, isFanned }){

  const [isFlipped, setIsFlipped] = useState(false);

  // If the user clicks "Shuffle", force all flipped cards to flip back over face-down
  useEffect(() => {
    if (!isFanned){
      setIsFlipped(false);
    }
  }, [isFanned]);

  const handleFlip = () => {
    // only allow flipping of cards if the cards are fanned out and not stacked
    if (isFanned && !isFlipped){
      setIsFlipped(true);
    }
  }

  return(
    <div className='tarot-card-container' style={style} onClick={handleFlip}>
      <div className={`tarot-card-inner ${isFlipped ? 'is-flipped' : ''}`}>
        {/* BACK OF THE CARD */}
        <div className='tarot-back-card'>
          <img src={tarotBackCard} alt='Tarot Back Card' className='placeholder-back-img'></img>
        </div>

        {/* FRONT OF THE CARD */}
        <div className='tarot-front-card'>
          {cardData && (
            <img src={cardData.frontImg} alt={cardData.name} className='tarot-front-img'/>
          )}
        </div>
      </div>
    </div>
  )
}

export default TarotCard;