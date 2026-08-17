import '../css/index.css'
import '../css/tarot.css'

function Tarot({ onBack }){
  return(
    <div>
      <button className='tarot-back-btn' onClick={onBack}>
          ‹ Back to Games
      </button>
    </div>
  )
}

export default Tarot;