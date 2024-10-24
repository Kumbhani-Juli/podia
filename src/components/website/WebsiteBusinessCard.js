// HomeDesign.js
import React from "react";
import "../../assets/styles/website/websitebusinesscard.css"; // Update the path based on your structure
import image1 from "../../assets/images/website/quote/quote-card1.avif";
import image2 from "../../assets/images/website/quote/quote-card2.avif";
import image3 from "../../assets/images/website/quote/quote-card3.avif";
import image4 from "../../assets/images/website/quote/quote-card4.avif";
import image5 from "../../assets/images/website/quote/quote-card5.avif";
import image6 from "../../assets/images/website/quote/quote-card6.avif";
import image7 from "../../assets/images/website/quote/quote-card7.avif";
import image8 from "../../assets/images/website/quote/quote-card8.avif";

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
		<div className="home-quotes">
			<div className="home-quotes-header">
				<h2>Their businesses found a home with Podia. So can yours.</h2>
				<p>
					Check out real examples of beautiful, high-performing websites built
					with Podia.
				</p>
			</div>

			{/* Image Section */}
			<div className="home-quotes-image-section">
				{images.map((image, index) => (
					<div
						key={index}
						className={`home-quotes-image-item item${(index % 4) + 1} `}
					>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</div>

			{/* Features Section */}
			<div className="home-quotes-features-section">
				<div className="home-quotes-features-text">
					<h3>
						All the features you need to build a site you love, none of the
						other stuff that gets in the way
					</h3>
					<p>
						If you’re wondering “can Podia do this?”, the answer is probably
						yes. Here’s what you get right out of the box.
					</p>
				</div>
				<div className="home-quotes-features-list">
					<ul>
						<li>Built-in SEO</li>
						<li>Checkout and payments</li>
						<li>Custom domains</li>
						<li>Blogging</li>
						<li>Video</li>
						<li>Third-party embeds</li>
						<li>Email forms</li>
						<li>Customer dashboard</li>
					</ul>{" "}
				</div>
				<div className="home-quotes-features-list">
					<ul>
						<li>Colors and styles</li>
						<li>Online courses</li>
						<li>Built-in SEO</li>
						<li>Memberships</li>
						<li>Digital products</li>
						<li>Email marketing</li>
						<li>Email automations</li>
						<li>Mobile friendly</li>
						<li>Fonts</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HomeDesign;
