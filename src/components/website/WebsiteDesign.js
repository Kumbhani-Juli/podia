import React from "react";
import "../../assets/styles/website/websitedesign.css";
import img1 from "../../assets/images/website/websitedesign/blogging-platform.avif";
import img2 from "../../assets/images/website/websitedesign/seo-tools.avif";
import img3 from "../../assets/images/website/websitedesign/site-builder.avif";

const VideoComponent = () => {
	return (
		<div className="image-component">
			{/* Section 1 */}
			<div className="image-section">
				<div className="image-content">
					<img src={img1} className="image" alt="Blogging Platform" />
				</div>
				<div className="image-text-content">
					<h3>A site builder that makes it easy to customize your website</h3>
					<p>
						Your business is unique, and your website should be, too. That’s why
						we made editing your site simple and straightforward, with loads of
						customization options that you don’t need to be a designer to use.
					</p>
				</div>
			</div>

			{/* Section 2 */}
			<div className="image-section reverse">
				<div className="image-content">
					<img src={img2} className="image" alt="SEO Tools" />
				</div>
				<div className="image-text-content">
					<h3>
						The blogging platform that helps you grow your following and turn
						readers into buyers
					</h3>
					<p>
						Launch a blog that looks just the way you want it to, and publish
						posts with ease. Because everything is integrated in Podia, you can
						sell products directly from your blog and turn blog posts into
						emails with a click.
					</p>{" "}
					<button className="image-learn-more-btn img-section-2-btn">
						Learn more about blogging
					</button>
				</div>
			</div>

			{/* Section 3 */}
			<div className="image-section">
				<div className="image-content">
					<img src={img3} className="image" alt="Site Builder" />
				</div>
				<div className="image-text-content">
					<h3>Get discovered with built-in SEO tools</h3>
					<p>
						Search engines love Podia too. Your site comes with SEO must-haves
						like speed and modern architecture, plus features like custom
						metadata to help you target the keywords that are important to you.
					</p>
				</div>
			</div>
		</div>
	);
};

export default VideoComponent;
