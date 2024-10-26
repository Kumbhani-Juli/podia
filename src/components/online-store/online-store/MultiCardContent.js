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
} from "@fortawesome/free-solid-svg-icons"; // Example icons

const MultiCardContent = () => {
	return (
		<div className="multicard-content">
			<section className="intro-section">
				<h1>Sell anything you can imagine</h1>
				<p>
					Podia gives you the flexibility to sell any digital product you want.
					Podia hosts everything and handles things like access management to
					ensure that only customers who pay can get your products.
				</p>
			</section>
			<section className="cards-section">
				<div className="card">
					<FontAwesomeIcon icon={faArrowAltCircleRight} className="card-icon" />
					<h4>Beautiful online courses you can build in minutes</h4>
					<p>
						Add videos, files, lessons, and organize your course however you
						like. Podia hosts your content and manages the payments from your
						customers.
					</p>
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faBookMedical} className="card-icon" />
					<h4>Ebooks, templates, and any file type you can think of</h4>
					<p>
						Have an ebook to sell? Templates you love? Podia makes it easy to
						spin up a sales page and sell ebooks, templates, audio files, video
						files, spreadsheets, and any other file type.
					</p>
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faKeyboard} className="card-icon" />
					<h4>
						One-on-one coaching and consultations, sold and scheduled from your
						site
					</h4>
					<p>
						Sell one-on-one access to your time and attention. Podia makes it
						easy for you to charge for coaching sessions and consultations.
					</p>
				</div>
				<div className="card">
					<FontAwesomeIcon icon={faPlay} className="card-icon" />
					<h4>
						Webinars and workshops with registration and payment in one place
					</h4>
					<p>
						Run webinars directly from your website. Set up a paid webinar and
						your customers can register straight from your Podia store.
					</p>
				</div>
			</section>
		</div>
	);
};

export default MultiCardContent;
