import React from "react";
import "../../assets/styles/website/websitequotes.css"; // Ensure to create and link this CSS file
import Quote from "../../assets/images/website/quote/bex-irvine.avif"; // Ensure to import the image
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
					"No plugins. No headaches. I just plop in my text and videos and
					publish."
				</h2>

				<p>
					More than 150,000 entrepreneurs — including creators, coaches,
					consultants, and many more — grow their business on Podia. See how
					easy building a beautiful website can be.
				</p>
				<h3>Bex Irvine</h3>
				<h3>Beauty Entrepreneur</h3>
				<button className="get-started-btn">Get started for free</button>
			</div>
		</div>
	);
};

export default QuoteSection;
