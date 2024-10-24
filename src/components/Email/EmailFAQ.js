import React, { useState } from "react";
import "../../assets/styles/email/emailfaq.css"; // Ensure to create and link this CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const WebsiteFAQ = () => {
	// Accordion state for toggling FAQ answers
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="email-website-faq-section">
			{/* FAQ Section */}
			<div className="email-faq-section">
				<div className="email-faq-left-column">
					<h2>Frequently asked questions</h2>
				</div>

				<div className="email-faq-right-column">
					<div className="email-accordion">
						{faqData.map((faq, index) => (
							<div key={index} className="email-accordion-item">
								<div
									className="email-accordion-title"
									onClick={() => toggleAccordion(index)}
								>
									<h3>{faq.question}</h3>
									<span>{activeIndex === index ? "-" : "+"}</span>
								</div>
								{activeIndex === index && (
									<div className="email-accordion-content">
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
		question: "Can I use Podia Email forms on my other website?",
		answer:
			"Yep, you can! Podia's 30-day free trial includes our no-code website builder and blogging tool so you can set up your full website, blog, and unlimited landing pages.",
	},
	{
		question: "Can I make lead magnets in Podia?",
		answer:
			"Absolutely! You can use the Podia website tool to create a full website, stand-alone landing pages, or both.",
	},
	{
		question: "Can I build landing pages in Podia?",
		answer:
			"We host all Podia websites, landing pages, and blogs, so you don’t have to worry about finding, maintaining, and paying for your own hosting.",
	},
	{
		question: "Does Podia have tagging and segmentation?",
		answer:
			"All plans come with a free podia.com subdomain that you can use for as long as you like. If you prefer to use a custom domain name, you can connect your custom domain on Mover and Shaker.",
	},
	{
		question: "Can I make my own templates with Podia Email?",
		answer:
			"Podia has SEO features for your website pages, landing pages, and blog posts. For each page and post, you can adjust your SEO title and description.",
	},
	{
		question: "Does Podia have sales funnels?",
		answer:
			"Podia is an all-in-one platform for running your online business. You get a full website, your own blog, unlimited landing pages, and the ability to sell digital products.",
	},
];

export default WebsiteFAQ;
