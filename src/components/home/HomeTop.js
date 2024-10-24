import React from "react";
import "../../assets/styles/home/hometop.css"; // Import the CSS file
import img1 from "../../assets/images/home/hometop/online-store.png";
import img2 from "../../assets/images/home/hometop/email-marketing.png";
import img3 from "../../assets/images/home/hometop/website.png";

const HomeTop = () => {
	return (
		<section className="home-top">
			<div className="home-content">
				<h1 className="home-title">The all-in-one for teams of one</h1>
				<p className="home-description">
					Join 150,000+ solo business owners who use Podia to run their website,
					online store, and email marketing.
				</p>
				<button className="home-trial-button">Start your free trial</button>
			</div>
			<div className="home-image-section">
				<div
					className="home-image-container"
					style={{
						"--intro-delay": "0.3s",
						"--rotate": "-10deg",
					}}
				>
					<img src={img1} alt="Content 1" />
					<div className="home-overlay"></div>
				</div>
				<div
					className="home-image-container"
					style={{ "--intro-delay": "0.5s", "--rotate": "0deg" }}
				>
					<img src={img2} alt="Content 2" />
					<div className="home-overlay"></div>
				</div>
				<div
					className="home-image-container"
					style={{ "--intro-delay": "0.7s", "--rotate": "10deg" }}
				>
					<img src={img3} alt="Content 3" />
					<div className="home-overlay"></div>
				</div>
			</div>
		</section>
	);
};

export default HomeTop;
