// HomeDesign.js
import React from "react";
import "../../../assets/styles/online-store/online-course/onlinedesign.css"; // Update the path based on your structure

const HomeDesign = () => {
	return (
		<div className="home-design">
			<div className="home-design-header">
				<h2>
					All the features you need, none of the stuff that gets in the way
				</h2>
				<p>
					If you’re wondering “can Podia do this?”, the answer is probably yes.
					Here’s what you get right out of the box.
				</p>
			</div>

			{/* Features Section */}
			<div className="home-design-features-section">
				<div className="home-design-features-list">
					<ul>
						<li>Quizzes</li>
						<li>Course comments</li>
						<li>Access limits</li>
						<li>Seat limits</li>
						<li>Upsells</li>
						<li>Coupons</li>
						<li>Embeds</li>
					</ul>{" "}
				</div>
				<div className="home-design-features-list">
					<ul>
						<li>Drip courses</li>
						<li>Presell courses</li>
						<li>Bundles</li>
						<li>Instant payouts</li>
						<li>Future start dates</li>
						<li>Customer messaging</li>
						<li>Course certificates</li>
					</ul>{" "}
				</div>
				<div className="home-design-features-list">
					<ul>
						<li>World-class support</li>
						<li>Video hosting included</li>
						<li>Track student progress</li>
						<li>Email marketing</li>
						<li>Affiliate marketing</li>
						<li>Payment plans</li>
						<li>Lead magnets</li>
					</ul>{" "}
				</div>
				<div className="home-design-features-list">
					<ul>
						<li>Waitlists</li>
						<li>Custom website</li>
						<li>Landing pages</li>
						<li>Coaching products</li>
						<li>High-converting checkout</li>
						<li>Free migrations</li>
						<li>Global tax support</li>
						<li>All other Podia features</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HomeDesign;
