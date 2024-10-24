import React from "react";
import "../../assets/styles/email/emailtop.css";
import img from "../../assets/images/email/emailtop/emailtop.png";
const WebsiteTop = () => {
	return (
		<div className="email-website-top">
			<div className="email-content-box">
				<h1>
					Email marketing that works seamlessly with the rest of your business
				</h1>
				<p>
					From weekly newsletters to segmented sales pitches, Podia Email helps
					you build your audience, nurture your relationships, and make more
					sales.
				</p>
				<button>Start your free trial</button>
			</div>
			<div className="email-image-box">
				<img src={img} alt="Right Side" />
			</div>
		</div>
	);
};

export default WebsiteTop;
