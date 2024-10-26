// HomeDesign.js
import React from "react";
import "../../../assets/styles/online-store/online-store/onlinecard.css"; // Update the path based on your structure
import image1 from "../../../assets/images/online-store/online-store/card1.avif";
import image2 from "../../../assets/images/online-store/online-store/card2.avif";
import image3 from "../../../assets/images/online-store/online-store/card3.avif";
import image4 from "../../../assets/images/online-store/online-store/card4.avif";
import image5 from "../../../assets/images/online-store/online-store/card5.avif";
import image6 from "../../../assets/images/online-store/online-store/card6.avif";
import image7 from "../../../assets/images/online-store/online-store/card7.avif";
import image8 from "../../../assets/images/online-store/online-store/card8.avif";

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
		<div className="online-card-quotes">
			<div className="online-card-quotes-header">
				<h2>Beautiful sales pages that turn visitors into buyers</h2>
				<p>
					Podia sales pages make your products and services look amazing. Here’s
					what entrepreneurs like you are selling on Podia today.
				</p>
			</div>

			{/* Image Section */}
			<div className="online-card-quotes-image-section">
				{images.map((image, index) => (
					<div
						key={index}
						className={`online-card-quotes-image-item item${(index % 4) + 1} `}
					>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</div>

			{/* Features Section */}
			<div className="online-card-quotes-features-section">
				<div className="online-card-quotes-features-text">
					<h3>Turn your fans and customers into salespeople</h3>
					<p>
						Affiliate marketing is built right into Podia and works with all
						product types, no third-party integrations required.
					</p>
				</div>
				<div className="online-card-quotes-features-list">
					<ul>
						<li>Your program, your terms</li>
						<li>Public or private</li>
						<li>Payouts made easy</li>
					</ul>{" "}
				</div>
			</div>
		</div>
	);
};

export default HomeDesign;
