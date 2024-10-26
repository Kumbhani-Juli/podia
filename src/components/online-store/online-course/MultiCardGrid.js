import React from "react";
import "../../../assets/styles/online-store/online-store/multicardcontent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesome for icons
import {
	faCoffee,
	faLightbulb,
	faCamera,
	faBook,
	faArrowRight,
	faArrowCircleLeft,
	faArrowAltCircleRight,
	faBookBible,
	faBookBookmark,
	faBookMedical,
	faKeyboard,
	faPlay,
	faSun,
	faMoneyBill,
	faDatabase,
	faSadTear,
	faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons"; // Example icons

const MultiCardContent = () => {
	return (
		<div className="multicard-content">
			<section className="intro-section">
				<h1>Sales and marketing made simple</h1>
				<p>
					From pre-sells to upsells, Podia has everything you need to help make
					your course a success.
				</p>
			</section>
			<section className="cards-section">
				<div className="card">
					<FontAwesomeIcon icon={faSun} className="card-icon" />
					<h4>Start earning early with pre-sells</h4>
					<p>
						Take payments before you launch with Podia’s pre-selling feature,
						the perfect way to validate your next course idea.
					</p>
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faMoneyBill} className="card-icon" />
					<h4>Make more money with upsells</h4>
					<p>
						Offer additional products and services during the checkout flow, at
						the exact moment your student is ready to buy.
					</p>
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faDatabase} className="card-icon" />
					<h4>Everyone loves a discount</h4>
					<p>
						Set up basic discounts or create customized coupons with usage
						limits and expiration dates.
					</p>
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faSatelliteDish} className="card-icon" />
					<h4>Sales pages that turn heads</h4>
					<p>
						Create beautiful sales pages that turn visitors into buyers. Start
						with professionally-designed templates and customize them to match
						your brand.
					</p>
				</div>
			</section>
		</div>
	);
};

export default MultiCardContent;
