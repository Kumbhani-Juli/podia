import React from "react";
import "../../assets/styles/home/homevideo.css";
import video1 from "../../assets/images/home/homevideo/email-animation.mp4";
import video2 from "../../assets/images/home/homevideo/online-store-animation.mp4";
import video3 from "../../assets/images/home/homevideo/website-animation.mp4";
const VideoComponent = () => {
	return (
		<div className="video-component">
			{/* Section 1 */}
			<div className="video-section">
				<div className="video-content">
					<video className="video" autoPlay loop muted>
						<source src={video3} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="text-content">
					<h2>Website</h2>
					<h3>Customize without compromise</h3>
					<p>
						Don’t settle for a generic website. Choose from Podia’s stunning,
						professionally-designed templates, and easily customize your site to
						make it feel like your own.
					</p>
					<button className="learn-more-btn section-1-btn">Learn more</button>
				</div>
			</div>

			{/* Section 2 */}
			<div className="video-section reverse">
				<div className="video-content">
					<video className="video" autoPlay loop muted>
						<source src={video2} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="text-content">
					<h2>Online Store</h2>
					<h3>Sell anything you can imagine</h3>
					<p>
						Sell courses, downloads, memberships, tickets, coaching, or any
						other digital product. Podia makes it simple.
					</p>
					<button className="learn-more-btn section-2-btn">Learn more</button>
				</div>
			</div>

			{/* Section 3 */}
			<div className="video-section">
				<div className="video-content">
					<video className="video" autoPlay loop muted>
						<source src={video1} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
				<div className="text-content">
					<h2>Email Marketing</h2>
					<h3>Build a loyal following</h3>
					<p>
						Leave your over-priced email platform behind for one that connects
						your newsletter and marketing emails seamlessly with the rest of
						your business.
					</p>
					<button className="learn-more-btn section-3-btn">Learn more</button>
				</div>
			</div>
		</div>
	);
};

export default VideoComponent;
