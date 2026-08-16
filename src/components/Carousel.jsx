import { useState } from 'react'
import '../css/index.css'
import '../css/carousel.css'

// org photos
import firstPic from '../assets/carousel/1.jpg'
import secondPic from '../assets/carousel/2.png'
import thirdPic from '../assets/carousel/3.png'
import fourthPic from '../assets/carousel/4.JPG'
import fifthPic from '../assets/carousel/5.jpg'

const slides = [
	{id: 1, label: 'ORG-PHOTO 1', image: firstPic},
	{id: 2, label: 'ORG-PHOTO 2', image: secondPic},
	{id: 3, label: 'ORG-PHOTO 3', image: thirdPic},
	{id: 4, label: 'ORG-PHOTO 4', image: fourthPic},
	{id: 5, label: 'ORG-PHOTO 5', image: fifthPic},
];

function Carousel(){
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prev) => {
			if (prev === 0){
				return slides.length - 1;
			} else{
				return prev - 1;
			}
		});
	};

	const handleNext = () => {
		setCurrentIndex((prev) => {
			if (prev === slides.length - 1){
				return 0
			} else{
				return prev + 1;
			}
		});
	};

	return(
		<div className='carousel-wrapper'>
			{/* focuses on the carousel */}
			<div className='carousel-main'>
				{/* left Arrow Button */}
				<button className='carousel-btn' onClick={handlePrev}>
					&lt;
				</button>

				<div className='carousel-card'>
					{/* evaluates some js code */}
					{slides[currentIndex].image && (
						<img 
							className="carousel-image" 
							src={slides[currentIndex].image} 
							alt={slides[currentIndex].label} 
						/>
					)}

				</div>

				<button className='carousel-btn' onClick={handleNext}>
					&gt;
				</button>
			</div>

			{/* dot indicator navigaton */}
			<div className="carousel-dots">
				{slides.map((_, index) => {

					let dotClass = "carousel-dot";

					// checks if this specific dot matches the current slide
					if (index === currentIndex) {
						dotClass = "carousel-dot active";
					}

					return (
						<span key={index} className={dotClass} onClick={() => setCurrentIndex(index)}/>
					)
				})}
			</div>
		</div>
	)
}

export default Carousel;