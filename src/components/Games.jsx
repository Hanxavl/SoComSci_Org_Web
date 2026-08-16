import '../css/index.css'
import '../css/games.css'
import tarotCardDisplay from '../assets/gamesImg/tarot_display_image.png'
import connectDisplay from '../assets/gamesImg/connect4_display_image.png'

function Games(){
    return(
      <div className='Main-Games-Container'>
        <div className='Games-Items-top'>
          <p>// GAMES SECTION</p>
          <h2>Pick your game</h2>
        </div>

        <div className='Games-Items-bot'>
          <div className='container-card'>
            {/* handles image of game */}
            <div className='card-image-container'>
              <img src={tarotCardDisplay} alt="Tarot Card Display" />
            </div>

            {/* handles title and description */}
            <div className='card-text-container'>
              <h3>Charot Cards Telling</h3>
              <p>
                Step up to the deck and let the "Charot Cards" reveal your fate. 
                Draw a card for the ultimate vibe check, a little bit of delulu energy, 
                and a hilariously hype reading from our live interpreters!
              </p>
            </div>

            {/* handles rarity info */}
            <div className='card-footer-container'>
              <span className='tier-chip'><span className='tier-dot common'></span> Common</span>
              <span className='tier-chip'><span className='tier-dot uncommon'></span> Uncommon</span>
              <span className='tier-chip'><span className='tier-dot rare'></span> Rare</span>
              <span className='tier-chip'><span className='tier-dot very-rare'></span> Very Rare</span>
              <span className='tier-chip'><span className='tier-dot legendary'></span> Legendary</span>
              <span className='tier-chip'><span className='tier-dot mythical'></span> Mythical</span>
              <span className='tier-chip'><span className='tier-dot lucky'></span> Lucky</span>
            </div>
          </div>

          <div className='container-card'>
            {/* handles image of game */}
            <div className='card-image-container'>
              <img src={connectDisplay} alt="Connect 4 Display" />
            </div>

            {/* handles title and description */}
            <div className='card-text-container'>
              <h3>Connect 4</h3>
              <p>
                Drop, block, and win. Challenge a friend to drop 
                discs into the grid and be the first to lock in four 
                consecutive colors vertically, horizontally, or diagonally.
              </p>
            </div>

            {/* handles connect 4 game look*/}
            <div className='card-footer-container player-legend'>
              <div className='player-item'>
                <div className='player-circle red'></div>
                <p>First Player</p>
              </div>

              <div className='player-item'>
                <div className='player-circle blue'></div>
                <p>Second Player</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Games;