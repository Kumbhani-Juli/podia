// Footer.js
import React from "react";
import "../assets/styles/footer.css"; // Ensure to create this CSS file

const Footer = ({ bgcolor, color }) => {
	return (
		<footer
			className="footer"
			style={{ backgroundColor: bgcolor, color: color }}
		>
			{/* First Section */}
			<div className="footer-first-section">
				<h2>Business is much simpler when everything is in one place</h2>
				<p>See for yourself. Try Podia free for 30 days.</p>
				<button className="get-started-button">Get Started</button>
			</div>

			{/* Second Section */}
			<div className="footer-second-section">
				<div className="footer-column">
					<h3>Podia</h3>
				</div>
				<div className="footer-column">
					<h3>Platform</h3>
					<p>Website builder</p>
					<p>Online store</p>
					<p>Email marketing</p>
					<p>Pricing</p>
				</div>
				<div className="footer-column">
					<h3>Features</h3>
					<p>Online courses</p>
					<p>Digital downloads</p>
					<p>Webinars</p>
					<p>Coaching</p>
					<p>Landing pages</p>
					<p>Blogging</p>
					<p>Newsletters</p>
					<p>Automations</p>
					<p>Integrations</p>
					<p>Podia Labs, Inc. © 2024</p>
				</div>

				<div className="footer-column">
					<h3>Resources</h3>
					<p>Changelog</p>
					<p>Podia alternatives</p>
					<p>Demo</p>
					<p>Blog</p>
					<p>Terms</p>
					<p>Privacy</p>
				</div>
				<div className="footer-column">
					<h3>podia</h3>
					<p>About</p>
					<p>Branding</p>
					<p>Become an affiliate</p>
					<p>Reviews</p>
				</div>
				<div className="footer-column">
					<h3>Support</h3>
					<p>Contact us</p>
					<p>Help center</p>
					<p>Getting started</p>
					<p>Hire a Podia Pro</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
