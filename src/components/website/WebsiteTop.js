import React from "react";
import "../../assets/styles/website/websitetop.css";
import img from "../../assets/images/website/websitetop/topimage.png";
const WebsiteTop = () => {
	return (
		<div className="website-top">
			<div className="content-box">
				<h1>A beautiful website in the next 10 minutes</h1>
				<p>
					You don’t have to choose between a website that looks amazing and one
					that’s easy to build yourself.
				</p>
				<button>Start your free trial</button>
			</div>
			<div className="image-box">
				<img src={img} alt="Right Side" />
			</div>
		</div>
	);
};

export default WebsiteTop;
