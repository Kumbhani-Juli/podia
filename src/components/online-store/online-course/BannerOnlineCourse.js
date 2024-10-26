import React from "react";
import "../../../assets/styles/online-store/online-course/banneronlinecourse.css";

const BannerOnlineCourse = () => {
	return (
		<>
			<div className="banner-online-course-container">
				<div className="banner-left-column">
					<h2>Growing your business is a lot simpler when you go all-in-one</h2>
					<p>
						Podia puts your website, online store, and email marketing in one
						place, so everything works together seamlessly.
					</p>
				</div>
				<div className="banner-right-column">
					<div className="right-content">
						<h3>Bundle anything</h3>
						<p>
							Your Podia products — courses, downloads, memberships, tickets,
							coaching, and everything else — can easily be packaged and sold
							together as a bundle.
						</p>
					</div>
					<div className="right-content">
						<h3>Sell from any page on your website</h3>
						<p>
							With Podia, you don’t just get a website that’s beautiful; you get
							a website that’s built to sell. Sell your online course from any
							page or blog post on your site.
						</p>
					</div>
					<div className="right-content">
						<h3>Email with confidence</h3>
						<p>
							Because Podia Email is connected directly to your online course,
							you never have to worry about inaccurate segmentation or
							automations going haywire because your tools aren’t talking to
							each other.
						</p>
					</div>
				</div>
			</div>
			<div className="banner-online-course-content">
				<p>
					All of our annual plans come with free migrations. Our team will move
					your products, email automations, and email list over to Podia for
					you.
				</p>
				<button>Get free migration</button>
			</div>
		</>
	);
};

export default BannerOnlineCourse;
