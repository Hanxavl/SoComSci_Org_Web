import { useState } from 'react'
import '../css/index.css'
import '../css/carousel.css'

const slides = [
	{id: 1, label: 'ORG PHOTO - 01', image: ''},
	{id: 2, label: 'ORG PHOTO - 02', image: ''},
	{id: 3, label: 'ORG PHOTO - 03', image: ''},
	{id: 4, label: 'ORG PHOTO - 04', image: ''},
	{id: 5, label: 'ORG PHOTO - 05', image: ''},
	{id: 6, label: 'ORG PHOTO - 06', image: ''},
	{id: 7, label: 'ORG PHOTO - 07', image: ''},
	{id: 8, label: 'ORG PHOTO - 08', image: ''},
	{id: 9, label: 'ORG PHOTO - 09', image: ''},
	{id: 10, label: 'ORG PHOTO - 10', image: ''},
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

					<p className='carousel-label'>{slides[currentIndex].label}</p>
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

export default Carousel