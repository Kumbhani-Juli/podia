import React, { useState } from "react";
import "../../assets/styles/website/websitefaq.css"; // Ensure to create and link this CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const WebsiteFAQ = () => {
	// Accordion state for toggling FAQ answers
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="website-faq-section">
			{/* Website Introduction Section */}
			<div className="website-intro">
				<h2>Start with a website, grow with Podia</h2>
				<p>
					While our website builder is great on its own, the magic of Podia is
					how it streamlines your business with everything in one place.
				</p>

				<div className="features-row">
					{/* Feature Box 1 */}
					<div className="feature-box">
						<div className="icon">
							<FontAwesomeIcon icon={faShoppingBag} size="3x" />
						</div>
						<h3>Online Store</h3>
						<p>
							Sell memberships, courses, digital downloads, and anything else
							you like.
						</p>
					</div>

					{/* Feature Box 2 */}
					<div className="feature-box">
						<div className="icon">
							<FontAwesomeIcon icon={faEnvelope} size="3x" />
						</div>
						<h3>Email Marketing</h3>
						<p>
							Beautiful email marketing that’s built directly into your website
							and online store.
						</p>
					</div>
				</div>
			</div>

			{/* FAQ Section */}
			<div className="faq-section">
				<div className="faq-left-column">
					<h2>Frequently asked questions</h2>
				</div>

				<div className="faq-right-column">
					<div className="accordion">
						{faqData.map((faq, index) => (
							<div key={index} className="accordion-item">
								<div
									className="accordion-title"
									onClick={() => toggleAccordion(index)}
								>
									<h3>{faq.question}</h3>
									<span>{activeIndex === index ? "-" : "+"}</span>
								</div>
								{activeIndex === index && (
									<div className="accordion-content">
										<p>{faq.answer}</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

// FAQ data array
const faqData = [
	{
		question: "Can I start building my website and blog for free?",
		answer:
			"Yep, you can! Podia's 30-day free trial includes our no-code website builder and blogging tool so you can set up your full website, blog, and unlimited landing pages.",
	},
	{
		question: "Can I build landing pages in Podia?",
		answer:
			"Absolutely! You can use the Podia website tool to create a full website, stand-alone landing pages, or both.",
	},
	{
		question: "Does Podia include website hosting?",
		answer:
			"We host all Podia websites, landing pages, and blogs, so you don’t have to worry about finding, maintaining, and paying for your own hosting.",
	},
	{
		question: "Can I connect a custom domain?",
		answer:
			"All plans come with a free podia.com subdomain that you can use for as long as you like. If you prefer to use a custom domain name, you can connect your custom domain on Mover and Shaker.",
	},
	{
		question: "Does Podia have SEO features?",
		answer:
			"Podia has SEO features for your website pages, landing pages, and blog posts. For each page and post, you can adjust your SEO title and description.",
	},
	{
		question: "What features does Podia have?",
		answer:
			"Podia is an all-in-one platform for running your online business. You get a full website, your own blog, unlimited landing pages, and the ability to sell digital products.",
	},
];

export default WebsiteFAQ;
