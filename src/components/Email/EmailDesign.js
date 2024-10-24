import React from "react";
import "../../assets/styles/email/emaildesign.css";
import img1 from "../../assets/images/email/emaildesign//email-automated-campaigns.svg";
import img2 from "../../assets/images/email/emaildesign/email-segment-tags.svg";

const VideoComponent = () => {
	return (
		<div className="email-component">
			{/* Section 1 */}
			<div className="email-section">
				<div className="email-content">
					<img src={img1} className="email" alt="Blogging Platform" />
				</div>
				<div className="email-text-content">
					<h3>
						Segment based on tags, products purchased, memberships, and revenue
					</h3>
					<p>
						All your customers’ info is in Podia, which means you can use it to
						segment your emails in a way other platforms can’t. Target messages
						based on how much your customers have spent, their activity, and
						what they’re interested in.
					</p>
				</div>
			</div>

			{/* Section 2 */}
			<div className="email-section reverse">
				<div className="email-content">
					<img src={img2} className="email" alt="SEO Tools" />
				</div>
				<div className="email-text-content">
					<h3>
						Automated campaigns for welcome emails, sales, and anything else
					</h3>
					<p>
						Podia Email is integrated into your store and website. That means
						you can use email automation to reach your customers at exactly the
						right moment, instead of worrying about whether your separate
						platforms are even talking to each other.
					</p>{" "}
				</div>
			</div>
		</div>
	);
};

export default VideoComponent;
