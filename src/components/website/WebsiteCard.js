// HomeDesign.js
import React from "react";
import "../../assets/styles/website/websitecard.css"; // Update the path based on your structure
import image1 from "../../assets/images/website//cards/card1.avif";
import image2 from "../../assets/images/website/cards/card2.avif";
import image3 from "../../assets/images/website/cards/card3.avif";
import image4 from "../../assets/images/website/cards/card4.avif";
import image5 from "../../assets/images/website//cards//card5.avif";
import image6 from "../../assets/images//website/cards/card6.avif";
import image7 from "../../assets/images/website/cards/card7.avif";
import image8 from "../../assets/images/website/cards/card8.avif";

const images = [
	{ src: image1, alt: "Design 1" },
	{ src: image2, alt: "Design 2" },
	{ src: image3, alt: "Design 3" },
	{ src: image4, alt: "Design 4" },
	{ src: image5, alt: "Design 5" },
	{ src: image6, alt: "Design 6" },
	{ src: image7, alt: "Design 7" },
	{ src: image8, alt: "Design 8" },
];

const HomeDesign = () => {
	return (
		<div className="website-design">
			<div className="website-design-header">
				<h2>Pick a stunning template and make it yours</h2>
				<p>
					Our site builder makes it easy to make websites that aren’t just
					beautiful to look at. They’re also built for performance, which means
					speed, SEO, and sales-boosting layouts.
				</p>
			</div>

			{/* Image Section */}
			<div className="website-design-image-section">
				{images.map((image, index) => (
					<div
						key={index}
						className={`website-design-image-item item${(index % 4) + 1} `}
					>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeDesign;
