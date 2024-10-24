// HomeDesign.js
import React from "react";
import "../../assets/styles/email/emailbusinesscard.css"; // Update the path based on your structure
import image1 from "../../assets/images/email/emailQuotes/img1.avif";
import image2 from "../../assets/images/email/emailQuotes/img2.avif";
import image3 from "../../assets/images/email/emailQuotes/img3.avif";
import image4 from "../../assets/images/email/emailQuotes/img4.avif";
import image5 from "../../assets/images/email/emailQuotes/img5.avif";
import image6 from "../../assets/images/email/emailQuotes/img6.avif";
import image7 from "../../assets/images/email/emailQuotes/img7.avif";
import image8 from "../../assets/images/email/emailQuotes/img8.avif";

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
		<div className="email-quotes">
			<div className="email-quotes-header">
				<h2>
					Landing pages, email forms, and lead magnets that help you grow your
					email list
				</h2>
				<p>
					Landing pages, email forms, and lead magnets that help you grow your
					email list
				</p>
			</div>

			{/* Image Section */}
			<div className="email-quotes-image-section">
				{images.map((image, index) => (
					<div
						key={index}
						className={`email-quotes-image-item item${(index % 4) + 1} `}
					>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</div>

			{/* Features Section */}
			<div className="email-quotes-features-section">
				<div className="email-quotes-features-text">
					<h3>Leave the technical stuff to us…</h3>
					<p>
						No code, no messy integrations, no headaches. Podia Email already
						has everything you need.
					</p>
				</div>
				<div className="email-quotes-features-list">
					<ul>
						<li>Custom sending domain</li>
						<li>Managed deliverability</li>
						<li>Email analytics</li>
						<li>Subscriber filtering</li>
					</ul>{" "}
				</div>
			</div>
		</div>
	);
};

export default HomeDesign;
