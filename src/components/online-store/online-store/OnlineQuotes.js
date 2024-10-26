import React from "react";
import "../../../assets/styles/online-store/online-store/onlinequotes.css"; // Ensure to create and link this CSS file
import Quote from "../../../assets/images/online-store/online-store/amy-leblanc-quote.avif"; // Ensure to import the image
const QuoteSection = () => {
	return (
		<div className="online-quote-section">
			{/* Image Section */}
			<div className="online-quote-image">
				<img src={Quote} alt="Quote Image" />
			</div>

			{/* Text Section */}
			<div className="online-quote-text">
				<h2>
					I love Podia because it has the absolute best user experience for my
					students and customers. I get compliments on it all the time!
				</h2>

				<p>
					More than 150,000 entrepreneurs — including creators, coaches,
					consultants, and many more — grow their business on Podia. See how
					easy selling online can be.
				</p>
				<h3>Amy LeBlanc</h3>
				<h3>Levee Road Studio</h3>
				<button className="online-get-started-btn">
					Start your free trial
				</button>
			</div>
		</div>
	);
};

export default QuoteSection;
