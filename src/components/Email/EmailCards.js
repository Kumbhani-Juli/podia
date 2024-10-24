// HomeDesign.js
import React from "react";
import "../../assets/styles/email/emailcards.css"; // Update the path based on your structure
import image1 from "../../assets/images/email/emailcards/template1.avif";
import image2 from "../../assets/images/email/emailcards/template2.avif";
import image3 from "../../assets/images/email/emailcards/template3.avif";
import image4 from "../../assets/images/email/emailcards/template4.avif";
import image5 from "../../assets/images/email/emailcards/template5.avif";
import image6 from "../../assets/images/email/emailcards/template6.avif";
import image7 from "../../assets/images/email/emailcards/template7.avif";
import image8 from "../../assets/images/email/emailcards/template8.avif";

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
		<div className="email-design">
			<div className="email-design-header">
				<h2>Can an email be too beautiful to delete?</h2>
				<p>
					Okay, probably not. But our professionally-designed templates are
					pretty close. Plus, they’re easy to customize to fit your brand.
				</p>
			</div>

			{/* Image Section */}
			<div className="email-design-image-section">
				{images.map((image, index) => (
					<div
						key={index}
						className={`email-design-image-item item${(index % 4) + 1} `}
					>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</div>
		</div>
	);
};

export default HomeDesign;
