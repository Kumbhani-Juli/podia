import React from "react";
import "../../../assets/styles/online-store/online-course/onlinestorequotes.css"; // Ensure to create and link this CSS file
import Quote from "../../../assets/images/online-store/online-course/Untitled_design__15__copy (1).avif"; // Ensure to import the image
const QuoteSection = () => {
	return (
		<div className="quote-section">
			{/* Image Section */}
			<div className="quote-image">
				<img src={Quote} alt="Quote Image" />
			</div>

			{/* Text Section */}
			<div className="quote-text">
				<h2>
					Rather than worrying about the website and logistics, I can focus on
					making the best courses possible.
				</h2>

				<p>
					Podia puts everything you need in one place. Get all the features you
					need to sell online courses. Plus your website, your email marketing,
					and all your other digital products.
				</p>
				<h3>Ali Abdaal</h3>
				<h3>Doctor and teacher</h3>
			</div>
		</div>
	);
};

export default QuoteSection;
