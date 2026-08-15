import '../css/index.css'
import '../css/body.css'
import Carousel from '../components/carousel'

function Body(){
	return(
		<div className='Main-Body-Container'>
			<div className='Body-Items'>
				<div className='Title-Card'>
					<div className="terminal-dots">
						<span className="dot red"></span>
						<span className="dot yellow"></span>
						<span className="dot green"></span>
					</div>

					<h3 className="terminal-text">
						WELCOME TO THE SOCIETY OF COMPUTER SCIENTISTS

						{/* this is the yellow blinking line */}
						<span className="cursor"></span> 
					</h3>
				</div>

				<p className='short-desc'>Code. Create. Connect. Welcome to your tech community!</p>
			</div>

			<div className='Body-Items'>
				<Carousel/>
			</div>
		</div>
	)
}

export default Body
