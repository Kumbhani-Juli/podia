import React from "react";
import "../../assets/styles/email/emailquotes.css"; // Ensure to create and link this CSS file
import Quote from "../../assets/images/email//emailQuotes/moira-hutchison.avif"; // Ensure to import the image
const QuoteSection = () => {
	return (
		<div className="email-quote-section">
			{/* Image Section */}
			<div className="email-quote-image">
				<img src={Quote} alt="email-Quote Image" />
			</div>

			{/* Text Section */}
			<div className="email-quote-text">
				<h2>
					"I am thrilled to notice that not only have my open rates improved
					using Podia Email but my click rates have also improved!"
				</h2>

				<p>
					More than 150,000 entrepreneurs — including creators, coaches,
					consultants, and many more — grow their business on Podia. See how
					easy email marketing can be.
				</p>
				<h3>Moira Hutchison</h3>
				<h3>Wellness with Moira</h3>
				<button className="email-get-started-btn">Get started for free</button>
			</div>
		</div>
	);
};

export default QuoteSection;
