import React, { useState } from "react";
import "../../../assets/styles/online-store/online-store/onlinefaq.css"; // Ensure to create and link this CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const WebsiteFAQ = () => {
	// Accordion state for toggling FAQ answers
	const [activeIndex, setActiveIndex] = useState(null);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="onlinestore-faq-section">
			{/* FAQ Section */}
			<div className="onlinestore-faq-section">
				<div className="onlinestore-faq-left-column">
					<h2>Frequently asked questions</h2>
				</div>

				<div className="onlinestore-faq-right-column">
					<div className="onlinestore-accordion">
						{faqData.map((faq, index) => (
							<div key={index} className="onlinestore-accordion-item">
								<div
									className="onlinestore-accordion-title"
									onClick={() => toggleAccordion(index)}
								>
									<h3>{faq.question}</h3>
									<span>{activeIndex === index ? "-" : "+"}</span>
								</div>
								{activeIndex === index && (
									<div className="onlinestore-accordion-content">
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
		question: "What kinds of things can I sell with Podia?",
		answer:
			"You can sell digital downloads, online courses, coaching, webinars, and pretty much any type of file you can think of. We have customers who sell ebooks, printables, self-paced courses, cohort courses, access-limited courses, coaching sessions, live webinars, prerecorded webinars, product bundles, templates, and so much more.You can also give away products for free, like free courses, discovery calls, and lead magnets. Podia handles all product hosting and file delivery. At this time, Podia does not have a feature for selling physical products.",
	},
	{
		question: "Can I build landing pages in Podia?",
		answer:
			"Absolutely! You can use the Podia website tool to create a full website, stand-alone landing pages, or both.",
	},
	{
		question: "What payment methods can my customers use?",
		answer:
			"You can connect Stripe and PayPal as your payment processors.If you connect Stripe to Podia, you can accept credit card payments for products, payment plans, and recurring subscriptions. With Stripe you also get to accept alternative payment methods, such as Google Pay, Apple Pay, iDeal, SEPA Debit, Stripe Link, etc.If you connect PayPal to Podia, your customers will be able to purchase your products through PayPal.",
	},
	{
		question: "How do I get my money after someone pays me?",
		answer:
			"It’s simple: connect your Stripe or PayPal account and anything you earn on Podia will be deposited directly into your account.",
	},
	{
		question: "What languages and currencies does Podia support?",
		answer:
			"We support 11 languages and more than 20 global currencies. You can find a full list of supported languages here, and our supported currencies here.",
	},
	{
		question: "How does Podia handle sales tax?",
		answer:
			"Podia can make tax time less stressful with global tax support. While Podia doesn’t file or remit your taxes for you, you can collect taxes (and addresses, if you need them) from 230 tax jurisdictions across all payment methods.",
	},
];

export default WebsiteFAQ;
