// HomeDesign.js
import React from "react";
import "../../assets/styles/home/homedesign.css"; // Update the path based on your structure
import image1 from "../../assets/images/home/homedesign/design1.avif";
import image2 from "../../assets/images/home/homedesign/design2.avif";
import image3 from "../../assets/images/home/homedesign/design3.avif";
import image4 from "../../assets/images/home/homedesign/design4.avif";
import image5 from "../../assets/images/home/homedesign/design5.avif";
import image6 from "../../assets/images/home/homedesign/design6.avif";
import image7 from "../../assets/images/home/homedesign/design7.avif";
import image8 from "../../assets/images/home/homedesign/design8.avif";

const images = [
	{ src: image1, alt: "Design 1" },
	{ src: image2, alt: "Design 2" },
	{ src: image3, alt: "Design 3" },
	{ src: image4, alt: "Design 4" },
	{ src: image5, alt: "Design 5" },
	{ src: image6, alt: "Design 6" },
	{ src: image7, alt: "Design 7" },
	{ src: image8, alt: "Design 8" },
];

const HomeDesign = () => {
	return (
		<div className="home-design">
			<div className="home-design-header">
				<h2>Designs that turn heads and close sales.</h2>
				<p>
					You don’t have to choose between a website that looks amazing and one
					that’s easy to build yourself.
				</p>
			</div>

			{/* Image Section */}
			<div className="home-design-image-section">
				{images.map((image, index) => (
					<div
						key={index}
						className={`home-design-image-item item${(index % 4) + 1} `}
					>
						<img src={image.src} alt={image.alt} />
					</div>
				))}
			</div>

			{/* Features Section */}
			<div className="home-design-features-section">
				<div className="home-design-features-text">
					<h3>
						Everything you need to run your business, right out of the box.
					</h3>
					<p>
						“Instead of worrying about 20 different platforms for email,
						website, course hosting…I can just run my business from Podia.”
						<br />– Valeria Hernández, VegiVale Wellness
					</p>
				</div>
				<div className="home-design-features-list">
					<ul>
						<li>Website Builder</li>
						<li>Fast checkout</li>
						<li>Online courses</li>
						<li>Tax support</li>
						<li>Digital downloads</li>
						<li>20+ currency support</li>
						<li>Memberships</li>
						<li>Upsells</li>
						<li>Landing pages</li>
						<li>Pre-sales</li>
						<li>Blogging</li>
						<li>Affiliate marketing</li>
					</ul>{" "}
				</div>
				<div className="home-design-features-list">
					<ul>
						<li>Templates</li>
						<li>Webinars</li>
						<li>Built-in SEO</li>
						<li>Coaching products</li>
						<li>Email marketing</li>
						<li>Coupons</li>
						<li>Email automations</li>
						<li>Multimedia products</li>
						<li>Email forms</li>
						<li>Product bundles</li>
						<li>Segmentation</li>
						<li>Custom products</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default HomeDesign;
