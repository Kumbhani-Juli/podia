import React from "react";
import "../../assets/styles/email/emailcontainergrid.css";

const TextContainerGrid = () => {
	return (
		<div className="text-container-grid">
			<div className="grid-column first-column">
				<h2>
					Growing your business is a lot simpler when your email marketing is
					built right in
				</h2>
				<p>
					Email marketing in the same place as your website and online store
					means that you don’t have to worry about connecting anything. But it
					also gives you an email platform that’s simply better at selling your
					products.
				</p>
			</div>
			<div className="grid-column second-column">
				<h3>No messing with email integrations</h3>
				<p>
					Instead of wrestling to get the right data from one platform to
					another, have all your subscribers’ info in one place.
				</p>
				<h3>One platform, one login, no hassle</h3>
				<p>
					Stop switching back and forth between tools. Your email marketing,
					website, and online store all use the same system, so anything you
					design in one is easy to design in the others.
				</p>
				<h3>Segmentation based on actual sales</h3>
				<p>
					Segment based on data you can’t get in other platforms (like product
					purchases and sales numbers). And with everything in one place, your
					sales-triggered automations will actually work.
				</p>
				<h3>Track every sale from email</h3>
				<p>
					When you sell through your Podia store, you can track every sale from
					every email that you send. That means you can see which emails bring
					in revenue, and which ones can be improved.
				</p>
			</div>
		</div>
	);
};

export default TextContainerGrid;
