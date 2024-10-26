import React from "react";
import "../../../assets/styles/online-store/online-store/onlinestorefeature.css";
import img from "../../../assets/images/online-store/online-store/online-store-checkout.svg";
const Feature = () => {
	return (
		<div className="online-store-feature-container">
			{/* Header Section */}
			<div className="online-store-feature-header">
				<h2>Take customers from “need it” to “got it” in just a few seconds</h2>
				<p>
					Podia’s high-converting checkout gives you revenue-boosting features
					that increase the value of every sale and every customer.
				</p>
			</div>

			{/* Full Width Image */}
			<div className="online-store-feature-image">
				<img src={img} alt="High Converting Checkout" />
			</div>

			{/* Features Grid */}
			<div className="online-store-feature-grid">
				<div className="online-store-feature-box">
					<h1>Coupons</h1>
					<p>
						Set up basic discounts or create customized coupons with usage
						limits and expiration dates.
					</p>
				</div>
				<div className="online-store-feature-box">
					<h1>Currency</h1>
					<p>
						With customers in 167 countries, Podia supports businesses all over
						the world. Take payment in more than 20 global currencies.
					</p>
				</div>
				<div className="online-store-feature-box">
					<h1>Payment gateways</h1>
					<p>
						Your customers can pay with Stripe, PayPal, Google Pay, Apple Pay,
						iDeal, SEPA Debit, Stripe Link, and other popular payment
						processors.
					</p>
				</div>
				<div className="online-store-feature-box">
					<h1>Payment plans</h1>
					<p>
						Increase conversions by letting customers pay in installments over
						time. Podia handles the recurring charges for you.
					</p>
				</div>
				<div className="online-store-feature-box">
					<h1>Upsells</h1>
					<p>
						Offer additional products and services during the checkout flow, at
						the exact moment your customer is ready to buy.
					</p>
				</div>
				<div className="online-store-feature-box">
					<h1>Tax collection</h1>
					<p>
						Make tax time less stressful with Podia’s global tax support.
						Collect taxes from 230 tax jurisdictions across all payment methods.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Feature;
