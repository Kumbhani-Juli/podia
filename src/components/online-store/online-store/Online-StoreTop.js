import React from "react";
import "../../../assets/styles/online-store/online-store/online-storetop.css";
import img from "../../../assets/images/online-store/online-store/top-img.png";
const WebsiteTop = () => {
	return (
		<div className="online-store-website-top">
			<div className="online-store-content-box">
				<h1>An online store that makes selling easy</h1>
				<p>
					Sell anything from your Podia store. Upload your content and leave the
					hosting, checkout, and delivery to us.
				</p>
				<button>Get your free online store</button>
			</div>
			<div className="online-store-image-box">
				<img src={img} alt="Right Side" />
			</div>
		</div>
	);
};

export default WebsiteTop;
