import React from "react";
import "../../assets/styles/home/homecards.css"; // Import the CSS file for styling
import img1 from "../../assets/images/home/homecards/card-myisha-t-hill.avif";
import img2 from "../../assets/images/home/homecards/card-em-connors.avif";
import img3 from "../../assets/images/home/homecards/card-khe-hy.avif";
import img4 from "../../assets/images/home/homecards/card-juan-munoz.avif";
const HomeCard = () => {
	return (
		<section className="home-card-section">
			<div className="home-card-header">
				<h1>
					Their businesses finally found an all-in-one home with Podia. So can
					yours.
				</h1>
				<p>
					More than 150,000 entrepreneurs — including creators, coaches,
					consultants, and many more — grow their business on Podia.
				</p>
			</div>

			<div className="cards-container">
				<div className="card">
					<img src={img1} alt="Card 1" className="card-image" />
					<span>Creator Stories</span>
					<h3>Em Connors</h3>
					<p>
						Podia creator Em Connors is a social media and product launch
						expert. Learn how she built an audience and earned five figures in a
						week with her first online course.
					</p>
				</div>
				<div className="card">
					<img src={img2} alt="Card 2" className="card-image" />
					<span> Creator Stories</span>
					<h3>Myisha T. Hill </h3>
					<p>
						Myisha T. Hill shares how she's building her business online. Her
						work helps white folx uncover their relationship with privilege to
						better understand how unchecked privilege causes harm in communities
						of color. Juan Muñoz
					</p>
				</div>

				<div className="card">
					<img src={img3} alt="Card 3" className="card-image" />
					<span> Creator Stories </span>
					<h3> Juan Muñoz </h3>
					<p>
						Creativity professor Juan Muñoz published his email newsletter for
						162 weeks in a row. Here's how his experiments paid off and led to a
						fulfilling online business.
					</p>
				</div>
				<div className="card">
					<img src={img4} alt="Card 4" className="card-image" />
					<span> Creator Stories </span>
					<h3> Khe Hy</h3>
					<p>
						Learn how Khe Hy left a job on Wall Street and turned a 36-person
						email list into a creator business with $500k in sales on Podia.
					</p>
				</div>
			</div>
		</section>
	);
};

export default HomeCard;
